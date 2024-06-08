import { BiPlus } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function SectionHeader({
  title,
  btnTitle,
  to,
}: {
  title: string;
  btnTitle?: string;
  to: string;
}) {
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="py-8 font-vazirBold text-2xl text-gray-600">{title}</h2>
        {btnTitle && (
          <Link
            to={to}
            className="btn bg-violet-500 font-vazirBold text-white hover:bg-violet-600"
          >
            <BiPlus size={24} />
            {btnTitle}
          </Link>
        )}
      </div>
    </>
  );
}

export default SectionHeader;
