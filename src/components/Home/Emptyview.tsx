import { useNavigate } from 'react-router';
import adding from '../../assets/addingbutton.svg';

export default function Emptyview() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/upload');
  };
  return (
    <div
      className='w-100% h-56 px-5 py-5 bg-gradient-to-b from-[#3a4155] to-[#1f2431] rounded-lg shadow border border-white justify-center items-center gap-2.5 inline-flex'
      onClick={handleClick}
    >
      <div className='w-100% flex-col justify-center items-center gap-4 inline-flex'>
        <img src={adding} alt='adding button' />
        <div className="self-stretch text-center text-white text-base font-medium font-['Pretendard'] leading-none">
          보고싶은 사람
        </div>
      </div>
    </div>
  );
}
