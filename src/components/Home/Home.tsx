import { Link } from 'react-router-dom';
import Emptyview from './Emptyview';
import Preview from './Preview';

export default function Home() {
  const profiles = [
    {
      id: 1,
      image: <img src='image1.jpg' alt='Profile 1' />,
      name: '홍길동',
      relationship: '친구',
      birthdate: '1990.01.01',
      deathdate: '2020.01.01',
    },
    {
      id: 2,
      image: <img src='image2.jpg' alt='Profile 2' />,
      name: '김철수',
      relationship: '동료',
      birthdate: '1985.05.12',
      deathdate: '2019.08.20',
    },
    {
      id: 3,
      image: <img src='asdfad' alt='Profile 3' />,
      name: '강영훈',
      relationship: '가족',
      birthdate: '2003.04.16',
      deathdate: '2103.04.16',
    },
    // More profiles can be added here
  ];

  return (
    <div className='w-screen min-h-screen relative bg-[#1a1e29]'>
      {/* Header section */}
      <div className='w-96 h-11 left-0 top-0 absolute'>
        <div className='w-16 h-3 left-[289.67px] top-[17.33px] absolute'>
          <div className='w-6 h-3 left-[42.33px] top-0 absolute'></div>
        </div>
      </div>

      {/* User profile section */}
      <div className='w-96 h-28 px-4 py-4 left-0 top-[44px] absolute bg-[#1a1e29] border-[#343434] flex-col justify-start items-start gap-2.5 inline-flex'>
        <div className='justify-start items-center gap-4 inline-flex'>
          <img
            className='w-20 h-20 rounded-full'
            src='https://via.placeholder.com/80x80'
            alt='User profile'
          />
          <div className='flex-col justify-start items-start gap-3 inline-flex'>
            <div className="self-stretch text-white text-xl font-normal font-['Source Han Serif K'] leading-tight">
              박진아
            </div>
            <div className="self-stretch text-white/70 text-base font-light font-['Pretendard'] leading-none">
              상태메세지
            </div>
          </div>
        </div>
      </div>

      {/* Grid of profiles */}
      <div className='w-100% left-[16px] right-[16px] top-[180px] absolute grid grid-cols-2 gap-2'>
        {profiles.map((profile) => (
          <Link to={`/gallary/${profile.id}`} key={profile.id}>
            <Preview
              image={profile.image}
              name={profile.name}
              relationship={profile.relationship}
              birthdate={profile.birthdate}
              deathdate={profile.deathdate}
            />
          </Link>
        ))}
        <Emptyview />
      </div>
    </div>
  );
}
