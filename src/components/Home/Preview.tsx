interface PreviewProps {
  image: React.ReactNode; // 이미지가 컴포넌트일 수 있으므로 ReactNode 사용
  name: string;
  relationship: string;
  birthdate: string;
  deathdate: string;
}

export default function Preview(props: PreviewProps) {
  return (
    <div>
      <div className='w-100% h-56 px-5 py-5 bg-gradient-to-b from-[#3a4155] to-[#1f2431] rounded-lg shadow border border-white justify-center items-center gap-2.5 flex'>
        <div className='w-100% flex-col justify-center items-center gap-4 inline-flex'>
          <div className='h-40 flex-col justify-center items-center gap-3 flex'>
            <img
              className='self-stretch h-24 rounded-full border border-white/60'
              src={props.image}
            />
            <div className='h-11 flex-col justify-start items-center gap-3 flex'>
              <div className="self-stretch text-white text-xl font-normal font-['Source Han Serif K'] leading-tight">
                {props.name}
              </div>
              <div className="self-stretch text-center text-white/80 text-sm font-light font-['Pretendard'] leading-none">
                {props.relationship}
              </div>
            </div>
          </div>
          <div className="text-white/50 text-xs font-light font-['Pretendard'] leading-3">
            {props.birthdate} - {props.deathdate}
          </div>
        </div>
      </div>
    </div>
  );
}
