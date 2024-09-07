import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function FileUploadForm() {
  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [deathdate, setDeathdate] = useState('');
  const [profileImage, setProfileImage] = useState<File | null>(null); // 프로필 사진 상태
  const [profilePreviewUrl, setProfilePreviewUrl] = useState<string | null>(
    null
  ); // 프로필 사진 미리보기
  const [isFormComplete, setIsFormComplete] = useState(false);

  useEffect(() => {
    if (name && relationship && birthdate && deathdate && profileImage) {
      setIsFormComplete(true); // 모든 필드가 입력되면 true
    } else {
      setIsFormComplete(false); // 하나라도 비어 있으면 false
    }
  }, [name, relationship, birthdate, deathdate, profileImage]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setProfileImage(selectedFile);
      setProfilePreviewUrl(URL.createObjectURL(selectedFile)); // 선택한 파일 미리보기
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('relationship', relationship);
    formData.append('birthdate', birthdate);
    formData.append('deathdate', deathdate);
    if (profileImage) {
      formData.append('profileImage', profileImage); // 프로필 이미지 추가
    }

    try {
      const response = await fetch('https://your-api-endpoint.com/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        handleClick();
      } else {
        console.log('Error submitting form');
      }
    } catch (error) {
      console.error('Error:', error);
      handleClick();
    }
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/home');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='w-screen min-h-screen flex flex-col justify-center items-center bg-[#1a1e29]'
    >
      {/* 프로필 이미지 업로드 */}
      <div className='relative w-[118px] h-[118px] mb-6'>
        <label htmlFor='profile-image-upload'>
          <div className='w-full h-full bg-[#727786] rounded-full border border-[#a4aab9] flex justify-center items-center cursor-pointer'>
            {profilePreviewUrl ? (
              <img
                src={profilePreviewUrl}
                alt='Profile Preview'
                className='w-full h-full object-cover rounded-full'
              />
            ) : (
              <div className='text-white text-base'>프로필 이미지</div>
            )}
          </div>
        </label>
        <input
          id='profile-image-upload'
          type='file'
          accept='image/*'
          className='hidden'
          onChange={handleFileChange}
        />
      </div>

      {/* 성함 입력 */}
      <div className='w-11/12 max-w-md flex flex-col items-center gap-6'>
        <div className='self-stretch flex-col justify-start items-start gap-3.5'>
          <label className='text-white text-base font-medium'>성함</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full px-4 py-2 bg-[#414758] rounded-lg border border-[#7d818f] text-white'
            placeholder='홍길동'
          />
        </div>

        {/* 관계 입력 */}
        <div className='self-stretch flex-col justify-start items-start gap-3.5'>
          <label className='text-white text-base font-medium'>관계</label>
          <input
            type='text'
            value={relationship}
            onChange={(e) => setRelationship(e.target.value)}
            className='w-full px-4 py-2 bg-[#414758] rounded-lg border border-[#7d818f] text-white'
            placeholder='친구'
          />
        </div>

        {/* 생년월일 입력 */}
        <div className='self-stretch flex-col justify-start items-start gap-3.5'>
          <label className='text-white text-base font-medium'>생년월일</label>
          <input
            type='date'
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            className='w-full px-4 py-2 bg-[#414758] rounded-lg border border-[#7d818f] text-white'
          />
        </div>

        {/* 추모 날짜 입력 */}
        <div className='self-stretch flex-col justify-start items-start gap-3.5'>
          <label className='text-white text-base font-medium'>추모 날짜</label>
          <input
            type='date'
            value={deathdate}
            onChange={(e) => setDeathdate(e.target.value)}
            className='w-full px-4 py-2 bg-[#414758] rounded-lg border border-[#7d818f] text-white'
          />
        </div>
      </div>

      <button
        type='submit'
        className={`mt-8 px-8 py-3 rounded-lg font-semibold ${
          isFormComplete ? 'bg-[#FAE65B] text-black' : 'bg-[#a09647] text-black'
        }`}
        disabled={!isFormComplete} // 모든 필드가 입력되지 않으면 버튼 비활성화
      >
        보고싶은 사람 등록하기
      </button>
    </form>
  );
}
