import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navMenuLinks } from '../../data/data';

function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="rounded-full border px-2">
      <div className="flex items-center" onClick={() => setIsMenuOpen(true)}>
        <div className="w-8 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div className="w-8 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ccc"
            className="h-9 w-9"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
      </div>
      <div
        className={`fixed right-0 top-0 h-screen w-full bg-black/60 transition-all duration-500 ${isMenuOpen ? 'visible z-50 opacity-100' : 'invisible z-0 opacity-0'}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <button className="absolute left-8 top-5 font-vazirBold text-4xl text-white">
          &times;
        </button>
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute top-0 z-50 min-h-screen w-[420px] overflow-y-auto rounded-e-xl bg-white py-5 shadow transition-all duration-500 ${isMenuOpen ? 'right-0' : '-right-[420px]'}`}
        >
          <header className="flex items-center gap-2 px-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ccc"
              className="h-16 w-16"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <button className="rounded-full bg-gray-100 px-3 py-2 font-vazirBold text-[12px] text-gray-600 transition-all hover:bg-gray-300">
              ورود / ثبت نام
            </button>
          </header>
          <div className="my-3 border-b"></div>
          <ul className="space-y-4 py-5 pr-5 text-sm ">
            {navMenuLinks.map((item) => (
              <li
                key={item.id}
                className="rounded-s-full p-2 transition-all hover:bg-gray-100"
              >
                <Link to="" className="flex items-center gap-2">
                  <span>{item.icon}</span>
                  <span className="font-vazirBold text-gray-500">
                    {item.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavMenu;
