import { useState } from 'react';
import { Link } from 'react-router-dom';
import Heading from './Heading';

const enamadLinks = [
  {
    id: 1,
    to: 'https://trustseal.enamad.ir/?id=92059&Code=K8mAW1T8g38wQGk0mCbf',
    title: 'اینماد',
    image: 'images/footer/enamad.png',
  },
  {
    id: 2,
    to: 'https://ecunion.ir/verify/jajiga.com?token=44569815bbb0af0764d2',
    title: 'اتحادیه کسب و کارهای مجازی',
    image: 'images/footer/ecunion.png',
  },
  {
    id: 3,
    to: '#',
    title: 'وزارت میراث فرهنگی',
    image: 'images/footer/vmfg.png',
  },
  {
    id: 4,
    to: 'https://profile.iwmf.ir/organizations/jajiga.com',
    title: 'جشنواره وب و موبایل',
    image: 'images/footer/mjwm.png',
  },
];

function Enamad() {
  const [mcth, setMscth] = useState(0);

  const clickHandler = (linkId: number) => {
    if (linkId === 3) {
      if (mcth === 0) {
        setMscth(linkId);
      } else {
        setMscth(0);
      }
    }
  };

  return (
    <div className="col-span-12 flex flex-col items-center lg:col-span-3">
      <Heading>با خیال راحت به جاجیگا اعتماد کنید</Heading>
      <div className="grid grid-cols-12 gap-2 sm:gap-4">
        {enamadLinks.map((link) => (
          <Link
            to={link.to}
            target={link.id === 3 ? '_self' : '_blank'}
            key={link.id}
            onClick={() => clickHandler(link.id)}
            onMouseLeave={() => setMscth(0)}
            className="relative col-span-3 flex h-[78px] w-[78px] items-center justify-center rounded-[30px] bg-white shadow sm:h-[94px] sm:w-[94px] lg:col-span-6"
          >
            <img
              title={link.title}
              src={link.image}
              className="h-16 w-16 p-1 sm:h-20 sm:w-20"
              alt={link.title}
            />
            {mcth === link.id && (
              <div
                onMouseEnter={() => setMscth(0)}
                className="absolute -top-20 z-10 w-56 rounded-xl bg-neutral-800 p-3 text-[11px] text-gray-200 shadow-xl"
              >
                <p>گواهینامه حرفه ای کسب و کارهای گردشگری در فضای مجازی</p>
                <p className="mt-2 font-vazirMedium">
                  شماره مجوز: 12365/854/9642
                </p>
                <div className="absolute -bottom-1 left-0 right-0 mx-auto h-4 w-4 rotate-45 bg-neutral-800 shadow-xl"></div>
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Enamad;
