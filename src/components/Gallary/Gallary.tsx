import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Media } from './Types';
import Header from './Header';
import Tabs from './Tabs';
import Content from './Content';
import Popup from './Popup';
import EnlargedPhotoView from './EnlargedPhotoView';
import { useParams, useNavigate } from 'react-router';
import addingButtonSvg from '../../assets/addingbutton.svg'; // Import the SVG
import './rotating.css';

export default function Gallery() {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook for navigation
  const [photos, setPhotos] = useState<Media[]>([]);
  const [videos, setVideos] = useState<Media[]>([]);
  const [isPhotoTabActive, setIsPhotoTabActive] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<Media | null>(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  useEffect(() => {
    const fetchMedia = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const [photosResponse, videosResponse] = await Promise.all([
          axios.get('/api/image/deceased'),
          axios.get('/api/video'),
        ]);
        setPhotos(photosResponse.data.photos || []);
        setVideos(videosResponse.data.videos || []);
      } catch (error) {
        console.error('Error fetching media:', error);
        setError('Failed to load media. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchMedia();
  }, []);

  const handleMediaUpload = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files) {
        setIsLoading(true);
        setError(null);
        const uploadPromises = Array.from(files).map(async (file) => {
          const formData = new FormData();
          formData.append('photo', file);
          try {
            const response = await axios.post('/api/image', formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
            return response.data;
          } catch (error) {
            console.error('Error uploading photo:', error);
            return null;
          }
        });

        try {
          const uploadedPhotos = await Promise.all(uploadPromises);
          setPhotos((prevPhotos) => [
            ...prevPhotos,
            ...uploadedPhotos.filter((photo): photo is Media => photo !== null),
          ]);
        } catch (error) {
          console.error('Error uploading photos:', error);
          setError('Failed to upload photos. Please try again.');
        } finally {
          setIsLoading(false);
        }
      }
    },
    []
  );

  const handleTabChange = useCallback((type: 'photo' | 'video') => {
    setIsPhotoTabActive(type === 'photo');
  }, []);

  const handlePhotoClick = useCallback((photo: Media) => {
    setSelectedPhoto(photo);
  }, []);

  const handleCloseEnlargedView = useCallback(() => {
    setSelectedPhoto(null);
  }, []);

  const togglePopup = useCallback(() => {
    setIsPopupVisible((prevState) => !prevState);
    setIsRotated((prevState) => !prevState);
  }, []);

  const handleVideoCreation = useCallback(() => {
    navigate('/create'); // Navigate to the video creation page
  }, [navigate]);

  if (isLoading) {
    return (
      <div className='w-full h-screen flex justify-center items-center text-white'>
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className='w-full h-screen flex justify-center items-center text-white'>
        {error}
      </div>
    );
  }

  return (
    <div className='w-full min-h-screen bg-[#1a1e29] flex flex-col'>
      <div className='w-full h-12 bg-[#1a1e29]'></div>
      <Header
        profileImageUrl='https://via.placeholder.com/80x80'
        name='박진아'
        relation='할아버지'
        dateRange='1999.04.05 - 3212.09.09'
      />
      <Tabs isPhotoTabActive={isPhotoTabActive} onTabChange={handleTabChange} />
      <Content
        isPhotoTabActive={isPhotoTabActive}
        photos={photos}
        videos={videos}
        onPhotoUpload={handleMediaUpload}
        togglePopup={togglePopup}
        onPhotoClick={handlePhotoClick}
      />

      <div className='fixed bottom-4 right-4'>
        <img
          src={addingButtonSvg}
          alt='Add Button'
          onClick={togglePopup}
          className={`w-12 h-12 cursor-pointer transition-transform ${
            isRotated ? 'rotate-to-x' : ''
          }`}
        />
      </div>

      {isPopupVisible && (
        <Popup
          onPhotoUpload={handleMediaUpload}
          onVideoCreate={handleVideoCreation}
          onClose={togglePopup}
        />
      )}

      {selectedPhoto && (
        <EnlargedPhotoView
          photo={selectedPhoto}
          onClose={handleCloseEnlargedView}
        />
      )}
    </div>
  );
}
