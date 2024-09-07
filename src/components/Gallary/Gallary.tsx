import React, { useState, useEffect, useCallback } from 'react';
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

  // 사진과 비디오 불러오는 부분은 그대로 유지
  useEffect(() => {
    // 초기 데이터를 로드하는 부분은 이대로 유지
    const fetchMedia = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // 이 부분은 API 요청 없이 초기화
        const initialPhotos: Media[] = []; // 초기 사진 데이터를 설정
        const initialVideos: Media[] = []; // 초기 비디오 데이터를 설정
        setPhotos(initialPhotos);
        setVideos(initialVideos);
      } catch (error) {
        console.error('Error fetching media:', error);
        setError('Failed to load media. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchMedia();
  }, []);

  // 파일을 선택했을 때 API 없이 바로 추가
  const handleMediaUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files) {
        setIsLoading(true);
        setError(null);

        const selectedPhotos = Array.from(files).map((file) => {
          // 여기서 파일을 미디어 객체로 변환 (필요에 따라 Media 타입 조정 가능)
          const newPhoto: Media = {
            id: URL.createObjectURL(file), // 임시로 파일 URL을 사용 (id로 가정)
            url: URL.createObjectURL(file), // 파일의 로컬 URL을 미리보기 용으로 사용
            name: file.name,
          };
          return newPhoto;
        });

        // 선택된 사진들을 추가
        setPhotos((prevPhotos) => [...prevPhotos, ...selectedPhotos]);

        setIsLoading(false);
      }
    },
    []
  );

  // 탭 변경 처리
  const handleTabChange = useCallback((type: 'photo' | 'video') => {
    setIsPhotoTabActive(type === 'photo');
  }, []);

  // 사진을 클릭하여 확대
  const handlePhotoClick = useCallback((photo: Media) => {
    setSelectedPhoto(photo);
  }, []);

  // 확대된 사진 보기 닫기
  const handleCloseEnlargedView = useCallback(() => {
    setSelectedPhoto(null);
  }, []);

  // 팝업 열기/닫기 및 버튼 회전 처리
  const togglePopup = useCallback(() => {
    setIsPopupVisible((prevState) => !prevState);
    setIsRotated((prevState) => !prevState);
  }, []);

  // 비디오 생성 페이지로 이동
  const handleVideoCreation = useCallback(() => {
    navigate('/create'); // 비디오 생성 페이지로 이동
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
