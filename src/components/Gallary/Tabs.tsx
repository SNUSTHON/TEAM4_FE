import React from 'react';
import images from '../../assets/images.svg';
import video from '../../assets/video.svg';

interface TabsProps {
  isPhotoTabActive: boolean;
  onTabChange: (type: 'photo' | 'video') => void;
}

const Tabs: React.FC<TabsProps> = ({ isPhotoTabActive, onTabChange }) => (
  <div className='w-full grid grid-cols-2 px-4 mt-4 border-b border-[#343434]'>
    <div
      className={`flex-col items-center ${
        isPhotoTabActive ? 'opacity-100' : 'opacity-40'
      }`}
      onClick={() => onTabChange('photo')}
    >
      <div className='flex justify-center gap-1 cursor-pointer'>
        <img src={images} alt='images' className='w-6 h-6 relative' />
        <div className='text-white text-base font-medium font-["Pretendard Variable"] leading-none'>
          사진
        </div>
      </div>
      {isPhotoTabActive && <div className='h-px bg-white w-full mt-2'></div>}
    </div>
    <div
      className={`flex-col items-center ${
        !isPhotoTabActive ? 'opacity-100' : 'opacity-40'
      }`}
      onClick={() => onTabChange('video')}
    >
      <div className='flex justify-center gap-1 cursor-pointer'>
        <img src={video} alt='video' className='w-6 h-6 relative' />
        <div className='text-white text-base font-medium font-["Pretendard Variable"] leading-none'>
          영상
        </div>
      </div>
      {!isPhotoTabActive && <div className='h-px bg-white w-full mt-2'></div>}
    </div>
  </div>
);
export default Tabs;
