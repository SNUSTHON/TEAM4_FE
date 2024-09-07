import React from 'react';
import backgroundSvg from '../assets/Background.svg';
import kakao from '../assets/kakao.svg';
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
        <div
          className='text-center text-white text-xl font-normal font-extralight'
          style={{ fontFamily: 'NotoSerifKR', lineHeight: '2.5rem' }}
        >
          별이 된 이들이
          <br />
          영원히 빛나기를 바라는 공간{' '}
          <div className="text-center text-white text-[32px] font-normal font-['Source Han Serif K'] leading-loose">
            윤슬
          </div>
        </div>
      </div>
      <div
        className='absolute w-full flex justify-center'
        style={{ bottom: '20%' }}
      >
        <button
          onClick={handleClick}
          className='w-80 h-14 bg-[#fee500] rounded-lg flex items-center justify-center text-[#242424] text-base font-semibold'
          style={{ fontFamily: 'Pretendard' }}
        >
          <img src={kakao} alt='KakaoTalk Logo' className='w-6 h-6 mr-2' />
          카카오로 시작하기
        </button>
      </div>
    </div>
  );
}
