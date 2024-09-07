import React from 'react';
import backgroundSvg from '../assets/Background.svg';
import { useNavigate } from 'react-router';

export default function Loginpage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/home');
  };
  return (
    <div
      className='w-screen min-h-screen bg-[#1a1e29] flex justify-center items-center relative'
      style={{
        backgroundImage: `url(${backgroundSvg})`,
        backgroundSize: 'contain',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className='absolute w-full flex justify-center'
        style={{ top: '15%' }}
      >
        <div className="text-center text-white text-2xl font-normal font-['Source Han Serif K'] leading-10">
          별이 된 이들이
          <br />
          영원히 빛나기를 바라는 공간
          <br />
          윤슬
        </div>
      </div>
      <div
        className='absolute w-full flex justify-center'
        style={{ bottom: '20%' }}
      >
        <button
          onClick={handleClick}
          className="w-80 h-14 bg-[#fee500] rounded-lg flex items-center justify-center text-[#242424] text-base font-semibold font-['Pretendard']"
        >
          카카오로 시작하기
        </button>
      </div>
    </div>
  );
}
