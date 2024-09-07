import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VideoCreationScreen = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption) {
      // Process the selected option as needed
      console.log(`Selected option: ${selectedOption}`);
      // Navigate back to the gallery
      navigate('/home');
    } else {
      // Optional: handle case where no option is selected
      alert('Please select an option before submitting.');
    }
  };

  return (
    <div className='w-full h-screen bg-[#1a1e29] flex flex-col items-center justify-center'>
      <div className='w-[375px] h-[812px] bg-[#1a1e29] relative flex flex-col items-start p-4'>
        <header className='w-full h-14 bg-[#1a1e29] flex items-center justify-center'>
          <h1 className='text-white text-2xl font-semibold'>영상 만들기</h1>
        </header>
        <div className='flex flex-col gap-4 mt-4'>
          <p className='text-white text-base font-medium'>
            어떤 영상을 만들어볼까요?
          </p>
          <div className='flex flex-wrap gap-2'>
            {['기념일', '노래를 불러요', '밥을 먹어요', '악기를 다뤄요'].map(
              (item, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full border text-base ${
                    selectedOption === item
                      ? 'bg-[#f9e55a] text-[#1a1e29]'
                      : 'bg-[#414758] border-[#7d818f] text-white'
                  }`}
                  onClick={() => handleOptionClick(item)}
                >
                  {item}
                </button>
              )
            )}
          </div>
          <p className='text-white/60 text-sm mt-2'>한 개만 선택 가능해요</p>
          <button
            className='px-4 py-2 bg-[#f9e55a] text-[#1a1e29] rounded-lg'
            onClick={handleSubmit}
          >
            등록하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCreationScreen;
