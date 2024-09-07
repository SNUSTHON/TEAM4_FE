import Preview from './Preview';

export default function Home() {
  // 여러 명의 데이터를 배열로 관리
  const profiles = [
    {
      id: 1,
      image: <img src='image1.jpg' alt='Profile 1' />,
      name: '홍길동',
      relationship: '친구',
      birthdate: '1990-01-01',
      deathDate: '2020-01-01',
    },
    {
      id: 2,
      image: <img src='image2.jpg' alt='Profile 2' />,
      name: '김철수',
      relationship: '동료',
      birthdate: '1985-05-12',
      deathDate: '2019-08-20',
    },
    // 더 많은 프로필 추가 가능
  ];

  return (
    <div>
      <div className='profile'>
        <div className='image'>image 자리</div>
        <div className='others'>
          <div className='name'>이름 자리</div>
          <div className='state'>상메</div>
        </div>
      </div>

      {/* 여러 명의 Preview 컴포넌트 렌더링 */}
      <div className='stars'>
        {profiles.map((profile) => (
          <Preview
            key={profile.id}
            image={profile.image}
            name={profile.name}
            relationship={profile.relationship}
            birthdate={profile.birthdate}
            deathDate={profile.deathDate}
          />
        ))}
      </div>
    </div>
  );
}
