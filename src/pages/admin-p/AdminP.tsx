import { MdDashboard } from 'react-icons/md';
import Logo from '../../components/navbar/Logo';
import { useAuth } from '../../hooks/useAuth';
import { RiHotelFill } from 'react-icons/ri';
import { FaUserTie } from 'react-icons/fa';
import { LiaUsersSolid } from 'react-icons/lia';
import { SiGitbook } from 'react-icons/si';
import { Link } from 'react-router-dom';

function AdminP() {
  const { user } = useAuth();

  return (
    <div className="bg-gray-100">
      <div className="grid grid-cols-12 gap-5 p-5">
        <div className="col-span-3 overflow-hidden rounded-lg bg-white">
          <div className="flex items-center justify-center bg-gray-500 p-5">
            <Logo withTitle={true} />
          </div>
          <div className="p-5">
            <div className="rounded-md border p-2">
              <p>{user?.user_metadata.fullname}</p>
            </div>
            <div className=" my-10">
              <h5 className="text-lg text-gray-600">منوی اصلی</h5>
              <ul className="mt-8 mb-3 flex flex-col gap-8 text-base">
                <li className="text-gray-600 transition-all hover:text-purple-500">
                  <Link to="" className="flex items-center gap-4">
                    <MdDashboard size={20} />
                    داشبورد
                  </Link>
                </li>
                <li className="text-gray-600 transition-all hover:text-purple-500">
                  <Link to="" className="flex items-center gap-4">
                    <RiHotelFill size={20} />
                    اقامتگاه ها
                  </Link>
                </li>
                <li className="text-gray-600 transition-all hover:text-purple-500">
                  <Link to="" className="flex items-center gap-4">
                    <FaUserTie size={20} />
                    میزبانان
                  </Link>
                </li>
                <li className="text-gray-600 transition-all hover:text-purple-500">
                  <Link to="" className="flex items-center gap-4">
                    <LiaUsersSolid size={20} />
                    مشتریان
                  </Link>
                </li>
                <li className="text-gray-600 transition-all hover:text-purple-500">
                  <Link to="" className="flex items-center gap-4">
                    <SiGitbook size={20} />
                    رزروها
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-9 rounded-lg bg-yellow-500 p-5">1</div>
      </div>
    </div>
  );
}

export default AdminP;
