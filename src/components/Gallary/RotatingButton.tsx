import React, { useState } from 'react';
import Popup from './Popup';

const RotatingButton = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  const handleClick = () => {
    setIsRotating(true);
    setTimeout(() => {
      setIsRotating(false);
      setIsPopupVisible(true);
    }, 1000); // Duration of the rotation
  };

  const handleClose = () => {
    setIsPopupVisible(false);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={`w-full h-[58px] bg-[#e55a5a] rounded-lg shadow flex justify-center items-center ${
          isRotating ? 'rotate-animation' : ''
        }`}
      >
        <div className='text-center text-[#242424] text-base font-semibold font-["Pretendard"] leading-normal'>
          버튼 클릭
        </div>
      </button>
      {isPopupVisible && (
        <Popup
          onPhotoUpload={(e) => console.log('Photo Uploaded')}
          onVideoCreate={() => console.log('Video Created')}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default RotatingButton;
