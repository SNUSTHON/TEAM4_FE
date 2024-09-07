import React from 'react';
import { Media } from './Types';

interface EnlargedPhotoViewProps {
  photo: Media;
  onClose: () => void;
}

const EnlargedPhotoView: React.FC<EnlargedPhotoViewProps> = ({
  photo,
  onClose,
}) => (
  <div
    className='fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50'
    onClick={onClose}
  >
    <div className='relative max-w-[90%] max-h-[90%]'>
      <img
        src={photo.url}
        alt={`Enlarged photo ${photo.id}`}
        className='max-w-full max-h-[90vh] object-contain'
      />
      <button
        className='absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 w-10 h-10 rounded-full flex items-center justify-center'
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        &times;
      </button>
    </div>
  </div>
);

export default EnlargedPhotoView;
