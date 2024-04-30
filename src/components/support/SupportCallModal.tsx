import { LiaPhoneVolumeSolid } from 'react-icons/lia';
import Button from '../ui/Button';

function SupportCallModal({
  closeHandler,
  isOpen,
}: {
  closeHandler: () => void;
  isOpen: number;
}) {
  return (
    <div
      className={`fixed right-0 top-0 flex h-screen w-full cursor-default flex-col items-center justify-center  bg-black/60 transition-all duration-500 max-sm:px-5 ${isOpen === 2 ? 'visible z-50 opacity-100' : 'invisible z-0 opacity-0'}`}
      onClick={closeHandler}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`rounded-lg bg-white px-5 py-10 shadow transition-all duration-500 dark:bg-gray-700 dark:text-white max-[600px]:w-[450px] max-[490px]:w-[300px] min-[600px]:w-[500px] ${isOpen === 2 ? 'translate-y-0' : 'translate-y-96'}`}
      >
        <Button
          onClick={closeHandler}
          style="absolute -top-10 left-2 px-0 py-0 hover:shadow-none font-vazirBold text-4xl text-white"
        >
          &times;
        </Button>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="pb-5 font-vazirBold text-lg">تماس با پشتیبانی</div>
          <section>
            <p className="mb-2 text-right">
              برای تماس تلفنی با پشتیبانی جاجیگا می توانید از ساعت
              <strong className="font-persianNums">8 صبح</strong> الی
              <strong className="font-persianNums">12 شب</strong> با شماره و
              داخلی های زیر تماس حاصل فرمایید:
            </p>
            <p className="font-persianNums text-base font-bold">
              شماره تماس: 01391001391
            </p>
            <div className="mt-5">
              <div className="flex flex-col gap-5 text-gray-500 dark:text-gray-300">
                <p className="font-persianNums">
                  پیگیری رزرو یا بررسی پرداخت: داخلی 1
                </p>
                <p className="font-persianNums">
                  ویرایش یا انتشار اقامتگاه: داخلی 2
                </p>
              </div>
              <div className="mt-5 flex items-center justify-center gap-4 rounded-md bg-yellow-400 p-2 font-vazirMedium text-base text-gray-800 shadow-md transition-all hover:bg-yellow-500">
                <LiaPhoneVolumeSolid size={20} className="rotate-[-90deg]" />
                <a href="tel:01391001391">تماس تلفنی با پشتیبان</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default SupportCallModal;
