export default function Emptyview() {
  return (
    <div className='w-100% h-56 px-5 py-5 bg-gradient-to-b from-[#3a4155] to-[#1f2431] rounded-lg shadow border border-white justify-center items-center gap-2.5 inline-flex'>
      <div className='w-100% flex-col justify-center items-center gap-4 inline-flex'>
        <div className='w-12 h-12 bg-[#f9e55a] rounded-full shadow flex justify-center items-center'>
          <span className='text-3xl text-[#242424] font-bold mb-2'>+</span>
        </div>
        <div className="self-stretch text-center text-white text-base font-medium font-['Pretendard'] leading-none">
          별 추가
        </div>
      </div>
    </div>
  );
}
