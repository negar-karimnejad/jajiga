import { BiPlus } from 'react-icons/bi';

function SectionHeader({
  title,
  btnTitle,
}: {
  title: string;
  btnTitle: string;
}) {
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="py-8 font-vazirBold text-2xl text-gray-600">{title}</h2>
        <button className="btn bg-violet-500 font-vazirBold text-white hover:bg-violet-600">
          <BiPlus size={24} />
          {btnTitle}
        </button>
      </div>
    </>
  );
}

export default SectionHeader;
