import { Link } from 'react-router-dom';

function InstallApp() {
  return (
    <div>
      <p className="mb-5 text-center font-vazirBold text-sm text-gray-700">
        نصب اپلیکیشن جاجیگا
      </p>
      <div className="flex gap-3">
        <div className="flex w-full flex-col gap-3">
          <Link target="_blank" to="https://cafebazaar.ir/app/com.jajiga.app">
            <img
              src="/images/app-store/Bazzar.png"
              className="h-12 w-full rounded-md bg-black object-contain md:h-10"
              alt="phone"
            />
          </Link>
          <Link target="_blank" to="https://myket.ir/app/com.jajiga.app">
            <img
              src="/images/app-store/Myket.png"
              className="h-12 w-full rounded-md bg-black object-contain md:h-10"
              alt="phone"
            />
          </Link>
        </div>
        <div className="flex w-full flex-col gap-3">
          <Link
            target="_blank"
            to="https://play.google.com/store/apps/details?id=com.jajiga.app"
          >
            <img
              src="/images/app-store/PlayStore.png"
              className="h-12 w-full rounded-md bg-black object-contain md:h-10"
              alt="phone"
            />
          </Link>

          <img
            src="/images/app-store/WebApp.png"
            className="h-12 w-full rounded-md bg-black object-contain md:h-10"
            alt="phone"
          />
        </div>
      </div>
    </div>
  );
}

export default InstallApp;
