import React from 'react';

interface HeaderProps {
  profileImageUrl: string;
  name: string;
  relation: string;
  dateRange: string;
}

const Header: React.FC<HeaderProps> = ({
  profileImageUrl,
  name,
  relation,
  dateRange,
}) => (
  <div className='w-full h-[116px] px-4 py-4 top-12 bg-[#1a1e29] flex items-center'>
    <img
      className='w-20 h-20 rounded-full'
      src={profileImageUrl}
      alt='Profile'
    />
    <div className='ml-4'>
      <div className='text-white text-xl font-normal font-["Source Han Serif K"] leading-tight'>
        {name}
      </div>
      <div className='text-white/70 text-base font-light font-["Pretendard"] leading-none'>
        {relation}
      </div>
      <div className='text-white/50 text-sm font-light font-["Pretendard"] leading-[14px]'>
        {dateRange}
      </div>
    </div>
  </div>
);
export default Header;
