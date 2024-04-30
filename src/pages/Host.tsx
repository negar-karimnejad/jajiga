import { ReactNode } from 'react';
import { hostData } from '../data/data';

interface HostDataProps {
  id: number;
  heading: string;
  text: string;
  infos: {
    icon: ReactNode;
    title: string;
    subtitle: string;
  }[];
}

function Host() {
  return (
    <div className="relative dark:bg-gray-800">
      <div className="h-36 w-full bg-yellow-400 bg-[url(/images/patterns/pattern.png)] p-5">
        <div className="container">
          <h2 className="font-vazirBold text-xl text-gray-700">
            چگونه میزبان شویم؟
          </h2>
          <p className="mt-4 text-sm text-gray-600">
            نکات زیر را مطالعه کنید تا با اطلاعات کافی در جاجیگا میزبان شوید و
            با خیال آسوده کسب درآمد کنید
          </p>
        </div>
      </div>
      {hostData.map((box: HostDataProps) => (
        <div
          key={box.id}
          className={`-mt-5 rounded-t-2xl ${box.id % 2 === 0 ? 'bg-gray-100 dark:bg-gray-900' : 'bg-white dark:bg-gray-800'}`}
        >
          <div className="container flex flex-col items-center justify-center gap-5 py-16 text-center">
            <h3 className="border-b-4 border-b-yellow-400 pb-2 font-vazirBold text-lg text-gray-700 dark:text-white">
              <span className="font-persianNums">{box.id}- </span>
              {box.heading}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {box.text}
            </p>
            <div className="mt-10 flex gap-x-5 gap-y-14 max-md:flex-col">
              {box.infos.map((info, index) => (
                <div
                  key={index}
                  className="relative rounded-3xl border-t-2 border-t-yellow-400 px-4 pb-5 pt-16 text-center shadow-lg dark:shadow-gray-950"
                >
                  <div className="absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border-2 border-yellow-500 bg-yellow-400 p-0.5 dark:bg-gray-900">
                    {info.icon}
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="relative">
                      <p className="text-right font-vazirMedium text-lg dark:text-white">
                        {info.title}
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-justify text-[12px] dark:text-gray-300">
                    {info.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      <div className="sticky bottom-0 py-2">
        <div className="mx-auto h-16 w-80 rounded-md bg-neutral-600 px-5 py-3">
          <button className="h-full w-full rounded-full bg-yellow-400 text-gray-800 transition-all hover:bg-yellow-500">
            ثبت اقامتگاه
          </button>
        </div>
      </div>
    </div>
  );
}

export default Host;
