import { Link } from 'react-router-dom';

export default function Loginpage() {
  return (
    <div className='w-screen min-h-screen bg-[#1a1e29] flex flex-col items-center justify-center'>
      <div className='text-center text-white text-2xl font-normal font-["Source Han Serif K"] leading-10 mb-12'>
        소개말 써주면
        <br />
        좋을 것 같은데..
      </div>
      <Link to='/home'>
        <button className='w-80 h-14 bg-[#fee500] rounded-lg flex justify-center items-center text-[#242424] text-base font-semibold font-["Pretendard"]'>
          카카오로 시작하기
        </button>
      </Link>
    </div>
  );
}
