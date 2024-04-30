import { Link } from 'react-router-dom';
import WhiteBgNavbar from '../components/navbar/WhiteBgNavbar';

function Appstore() {
  return (
    <>
      <div className="mx-auto w-full border-b bg-white py-2 dark:border-0 dark:bg-gray-800 lg:gap-x-10">
        <div className="container flex items-center justify-between gap-x-3">
          <WhiteBgNavbar />
        </div>
      </div>
      <div className="h-screen bg-[#f0c807] py-9">
        <div className="container flex flex-col h-full items-center justify-center gap-5 lg:flex-row-reverse">
          <img
            loading="lazy"
            src="/images/app-store/phone.png"
            className="w-72 "
            alt="phone"
          />
          <div className="flex flex-col justify-center gap-4 max-lg:items-center">
            <h3 className="font-vazirBold text-2xl text-gray-800">
              نصب اپلیکیشن جاجیگا
            </h3>
            <p className="font-persianNums text-lg text-gray-700">
              بیش از 21000 اقامتگاه در دستان شماست
            </p>
            <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
              <Link
                target="_blank"
                to="https://cafebazaar.ir/app/com.jajiga.app"
              >
                <img
                  loading="lazy"
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
                  loading="lazy"
                  src="/images/app-store/PlayStore.png"
                  className="h-12 w-56 rounded-md bg-black object-contain"
                  alt="phone"
                />
              </Link>
              <Link target="_blank" to="https://myket.ir/app/com.jajiga.app">
                <img
                  loading="lazy"
                  src="/images/app-store/Myket.png"
                  className="h-12 w-56 rounded-md bg-black object-contain"
                  alt="phone"
                />
              </Link>
              <img
                loading="lazy"
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
