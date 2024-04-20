import { PiInstagramLogo, PiTelegramLogo } from 'react-icons/pi';
import { Link } from 'react-router-dom';

function Socials() {
  return (
    <div>
      <p className="mb-5 text-center font-vazirBold text-sm text-gray-700">
        با ما همراه شوید
      </p>
      <div className="flex w-full justify-center gap-2 md:flex-col">
        <Link
          target="_blank"
          className="flex h-12 w-full items-center justify-center gap-3 rounded-md bg-black bg-gradient-to-r from-purple-600 via-red-600 to-orange-500 shadow md:h-10 md:w-40"
          to="https://www.instagram.com/jajiga.iran"
        >
          <span
            className="font-vazirMedium text-base text-white"
            style={{ direction: 'ltr' }}
          >
            700 k
          </span>
          <PiInstagramLogo size={30} className="text-white" />
        </Link>
        <Link
          target="_blank"
          className="flex h-12 w-full items-center justify-center gap-3 rounded-md bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 shadow md:h-10 md:w-40"
          to="https://t.me/jajiga"
        >
          <span
            className="font-vazirMedium text-base text-white"
            style={{ direction: 'ltr' }}
          >
            20 k
          </span>
          <PiTelegramLogo size={25} className="text-white" />
        </Link>
      </div>
    </div>
  );
}

export default Socials;
