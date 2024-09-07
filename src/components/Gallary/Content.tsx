import React from 'react';
import { Media } from './Types';
import AddPhotoButton from './AddPhotoButton';
import picture from '../../assets/Bigtwoimages.svg';

interface ContentProps {
  isPhotoTabActive: boolean;
  photos: Media[];
  videos: Media[];
  onPhotoUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  togglePopup: () => void;
  onPhotoClick: (photo: Media) => void;
}

const Content: React.FC<ContentProps> = ({
  isPhotoTabActive,
  photos,
  videos,
  onPhotoUpload,
  togglePopup,
  onPhotoClick,
}) => {
  const mediaItems = isPhotoTabActive ? photos : videos;

  return (
    <div className='w-full p-4'>
      {isPhotoTabActive && (photos.length === 0 || !photos) ? (
        <div className='w-full flex flex-col items-center'>
          <div className='text-center text-white text-xl font-medium font-["Pretendard Variable"] leading-tight'>
            사진이 아직 없어요
          </div>
          <div className='text-center text-white/80 text-base font-light font-["Pretendard Variable"] leading-none mt-2'>
            사진을 10장 이상 올려야 영상을 만들 수 있어요
          </div>
          <img src={picture} alt='two big images' />
          <AddPhotoButton onPhotoUpload={onPhotoUpload} />
        </div>
      ) : !isPhotoTabActive && videos.length === 0 ? (
        <div className='w-full flex justify-center items-center h-[202px]'>
          {/* <div className='w-[343px] h-[202px] px-[70px] py-[88px] bg-[#414758] rounded-lg flex justify-center items-center'> */}
            {/* <div className='text-center text-white/60 text-base font-medium font-["Pretendard Variable"] leading-none'>
              영상이 만들어지고 있어요
            </div> */}
 <video
            src="http://10.50.33.214:8080/video/birthday.mp4"
            controls // 비디오 컨트롤 표시
            className='w-full h-full object-cover rounded-lg'
          />
          {/* </div> */}
        </div>
      ) : (
        <div className='flex flex-wrap gap-2'>
          {mediaItems &&
            mediaItems.map((item) =>
              isPhotoTabActive ? (
                <img
                  key={item.id}
                  src={item.url}
                  alt={`Photo ${item.id}`}
                  className='w-[100px] h-[100px] object-cover cursor-pointer'
                  onClick={() => onPhotoClick(item)}
                />
              ) : (
                <video
                  key={item.id}
                  src="http://10.50.33.214:8080/video/birthday.mp4"
                  controls
                  className='w-[100px] h-[100px] object-cover'
                >
                  Your browser does not support the video tag.
                </video>
              )
            )}
        </div>
      )}
      {isPhotoTabActive && photos.length >= 10 && (
        <div className='fixed bottom-4 right-4'>
          <button
            className='w-12 h-12 bg-[#f9e55a] rounded-full flex justify-center items-center shadow-lg'
            onClick={togglePopup}
          >
            <div className='text-[#242424] text-xl font-semibold'>+</div>
          </button>
        </div>
      )}
    </div>
  );
};

export default Content;
