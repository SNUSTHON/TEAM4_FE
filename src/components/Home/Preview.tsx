interface PreviewProps {
  image: React.ReactNode; // 이미지가 컴포넌트일 수 있으므로 ReactNode 사용
  name: string;
  relationship: string;
  birthdate: string;
  deathDate: string;
}

export default function Preview(props: PreviewProps) {
  return (
    <div>
      <div className='image'>{props.image}</div>
      <div className='others'>
        <div className='name'>{props.name}</div>
        <div className='relationship'>{props.relationship}</div>
        <div className='date'>
          {props.birthdate} ~ {props.deathDate}
        </div>
      </div>
    </div>
  );
}
