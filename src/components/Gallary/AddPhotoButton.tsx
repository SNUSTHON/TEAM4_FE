import React, { ChangeEvent } from 'react';

interface AddPhotoButtonProps {
  onPhotoUpload: (event: ChangeEvent<HTMLInputElement>) => void;
}

const AddPhotoButton: React.FC<AddPhotoButtonProps> = ({ onPhotoUpload }) => (
  <label className='w-[200px] h-[58px] bg-[#f9e55a] rounded-lg shadow flex justify-center items-center cursor-pointer mt-4'>
    <div className='text-center text-[#242424] text-base font-semibold font-["Pretendard"] leading-normal'>
      사진 추가하기
    </div>
    <input
      type='file'
      accept='image/*'
      multiple
      hidden
      onChange={onPhotoUpload}
    />
  </label>
);
export default AddPhotoButton;
