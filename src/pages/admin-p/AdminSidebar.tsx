import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/navbar/Logo';
import { adminPMenus } from '../../data/data';
import { useAuth } from '../../hooks/useAuth';

function AdminSidebar() {
  const { user } = useAuth();
  const [activeItem, setActiveItem] = useState(1);
  return (
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
          <ul className="mb-3 mt-8 flex flex-col gap-8 text-base">
            {adminPMenus.map((item) => (
              <li
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className={`transition-all hover:text-purple-500 ${activeItem === item.id ? 'text-purple-500' : 'text-gray-600'}`}
              >
                <Link to={item.to} className="flex items-center gap-4">
                  {item.icon}
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminSidebar;
