import { Link } from 'react-router-dom';
import Logo from './Logo';
import NavLinks from './NavLinks';
import NavMenu from './NavMenu';
import NavSearch from './NavSearch';

function WhiteBgNavbar() {
  return (
    <>
      <div className="cursor-pointer rounded-full border px-2">
        <NavMenu />
      </div>
      <div className="flex shrink-0 gap-8 text-gray-500 max-md:hidden">
        <NavLinks />
      </div>
      <div className="flex items-center gap-2 sm:w-full">
        <div className="h-10 w-10 rounded-full border p-1 max-md:hidden">
          <svg
            className="sc-679cb2a8-0 iBzALU sc-31312756-1 cbqNKi"
            fill="none"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19 17H18C17.448 17 17 16.552 17 16V11C17 10.448 17.448 10 18 10H19C20.105 10 21 10.895 21 12V15C21 16.105 20.105 17 19 17Z"
              fill="#F0C807"
              stroke="#323232"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 17H5C3.895 17 3 16.105 3 15V12C3 10.895 3.895 10 5 10H6C6.552 10 7 10.448 7 11V16C7 16.552 6.552 17 6 17Z"
              fill="#F0C807"
              stroke="#323232"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M18.5 10V9.5C18.5 5.91 15.59 3 12 3V3C8.41 3 5.5 5.91 5.5 9.5V10"
              stroke="#323232"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.625 21.25H11.375C10.685 21.25 10.125 20.69 10.125 20C10.125 19.31 10.685 18.75 11.375 18.75H12.625C13.315 18.75 13.875 19.31 13.875 20C13.875 20.69 13.315 21.25 12.625 21.25Z"
              fill="#F0C807"
              stroke="#323232"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M13.875 20H16C17.105 20 18 19.105 18 18V17"
              stroke="#323232"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        <NavSearch />
      </div>
      <Link to="/" className="max-lg:hidden sm:shrink-0">
        <img src="/images/logo/logo2.png" className="w-36" alt="" />
      </Link>
      <div className=" sm:shrink-0 lg:hidden">
        <Logo withTitle={false} />
      </div>
    </>
  );
}

export default WhiteBgNavbar;