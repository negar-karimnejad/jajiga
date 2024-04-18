import { Link } from 'react-router-dom';

function Appstore() {
  return (
    <div className="flex items-center justify-center bg-[#f0c807] py-10 lg:min-h-[548px]">
      <div className="container flex flex-col items-center justify-center gap-5 lg:flex-row-reverse">
        <img src="/images/app-store/phone.png" className="w-72" alt="phone" />
        <div className="flex flex-col justify-center gap-4 max-lg:items-center">
          <h3 className="font-vazirBold text-2xl ">نصب اپلیکیشن جاجیگا</h3>
          <p className="text-lg text-gray-700">
            بیش از <span className="font-BKoodak text-xl">21000</span> اقامتگاه
            در دستان شماست
          </p>
          <div className="grid grid-cols-2 gap-x-3 gap-y-1">
            <Link target="_blank" to="https://cafebazaar.ir/app/com.jajiga.app">
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
  );
}

export default Appstore;
