import { Link } from 'react-router-dom';
import Logo from '../components/navbar/Logo';
import NavLinks from '../components/navbar/NavLinks';
import NavMenu from '../components/navbar/NavMenu';
import NavSearch from '../components/navbar/NavSearch';

function Appstore() {
  return (
    <>
      <div className="container flex items-center justify-between gap-x-3 py-2 lg:gap-x-10 lg:py-0">
        <div className="cursor-pointer rounded-full border px-2">
          <NavMenu />
        </div>
        <NavLinks />
        <div className="flex w-full items-center gap-2">
          <div className="h-10 w-10 shrink-0 rounded-full border p-1 max-md:hidden">
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
        <div className="shrink-0 max-lg:hidden">
          <img src="/images/logo/logo2.png" className="w-36" alt="" />
        </div>
        <div className="w-12 shrink-0 lg:hidden">
          <Logo withTitle={false} />
        </div>
      </div>
      <div className="flex items-center justify-center bg-[#f0c807] py-9 lg:min-h-[548px]">
        <div className="container flex flex-col items-center justify-center gap-5 lg:flex-row-reverse">
          <img
            src="/images/app-store/phone.png"
            className="w-72 max-sm:w-52"
            alt="phone"
          />
          <div className="flex flex-col justify-center gap-4 max-lg:items-center">
            <h3 className="font-vazirBold text-2xl ">نصب اپلیکیشن جاجیگا</h3>
            <p className="text-lg text-gray-700 max-sm:w-52 max-sm:text-center">
              بیش از <span className="font-BKoodak text-xl">21000</span>{' '}
              اقامتگاه در دستان شماست
            </p>
            <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 max-sm:grid-cols-1">
              <Link
                target="_blank"
                to="https://cafebazaar.ir/app/com.jajiga.app"
              >
                <img
                  src="/images/app-store/Bazzar.png"
                  className="h-12 w-56 rounded-md bg-black object-contain"
                  alt="phone"
                />
              </Link>
              <Link
                target="_blank"
                to="https://play.google.com/store/apps/details?id=com.jajiga.app"
              >
                <img
                  src="/images/app-store/PlayStore.png"
                  className="h-12 w-56 rounded-md bg-black object-contain"
                  alt="phone"
                />
              </Link>
              <Link target="_blank" to="https://myket.ir/app/com.jajiga.app">
                <img
                  src="/images/app-store/Myket.png"
                  className="h-12 w-56 rounded-md bg-black object-contain"
                  alt="phone"
                />
              </Link>
              <img
                src="/images/app-store/WebApp.png"
                className="h-12 w-56 rounded-md bg-black object-contain"
                alt="phone"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Appstore;
