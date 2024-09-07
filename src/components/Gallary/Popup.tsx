import React from 'react';
import video from '../../assets/blackvideo.svg';
import images from '../../assets/blackimage.svg';

interface PopupProps {
  onPhotoUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onVideoCreate: () => void;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({
  onPhotoUpload,
  onVideoCreate,
  onClose,
}) => {
  return (
    <div className='fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 w-1/2 max-w-xs'>
      <div className='flex flex-col gap-4'>
        <button
          className='w-full flex items-center gap-2 py-2 px-3 border-b border-gray-300'
          onClick={onVideoCreate}
        >
          <img src={video} alt='video' className='w-6 h-6 text-gray-600' />
          <span className='text-gray-700 text-sm font-medium'>영상 만들기</span>
        </button>
        <label
          htmlFor='photo-upload'
          className='w-full flex items-center gap-2 py-2 px-3 cursor-pointer'
        >
          <img src={images} alt='pictures' className='w-6 h-6 text-gray-600' />
          <span className='text-gray-700 text-sm font-medium'>
            사진 추가하기
          </span>
          <input
            id='photo-upload'
            type='file'
            className='hidden'
            onChange={onPhotoUpload}
          />
        </label>
      </div>
    </div>
  );
};

export default Popup;
