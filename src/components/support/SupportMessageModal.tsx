import { useState } from 'react';
import { BiEnvelope } from 'react-icons/bi';

function SupportMessageModal({
  closeHandler,
  isOpen,
}: {
  closeHandler: () => void;
  isOpen: number;
}) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleButtonClick = () => {
    setShowTooltip(true);
    navigator.clipboard.writeText('info@jajiga.com');
    setTimeout(() => {
      setShowTooltip(false);
    }, 1000);
  };

  return (
    <div
      className={`fixed right-0 top-0 flex h-screen w-full cursor-default flex-col items-center justify-center  bg-black/60 transition-all duration-500 max-sm:px-5 ${isOpen === 3 ? 'visible z-50 opacity-100' : 'invisible z-0 opacity-0'}`}
      onClick={closeHandler}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`rounded-lg bg-white px-5 py-10 shadow transition-all duration-500 dark:bg-gray-700 dark:text-white max-[600px]:w-[450px] max-[490px]:w-[300px] min-[600px]:w-[500px] ${isOpen === 3 ? 'translate-y-0' : 'translate-y-96'}`}
      >
        <button
          onClick={closeHandler}
          className="absolute -top-10 left-2 font-vazirBold text-4xl text-white"
        >
          &times;
        </button>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="pb-5 font-vazirBold text-lg">
            ارسال ایمیل/نامه به جاجیگا
          </div>
          <section>
            <div className="mb-2 text-right">
              از ایمیل می‌توانید به منظور ارسال مکاتبات رسمی، ارسال رزومه و
              پیشنهاد یا انتقاد خود به ما استفاده کنید:
              <div className="relative my-5 flex justify-center">
                <div
                  className={`tooltip tooltip-open absolute transition-all ${showTooltip ? 'visible translate-y-0' : 'invisible -z-10 translate-y-5'}`}
                  data-tip="کپی شد"
                ></div>
                <button
                  onClick={handleButtonClick}
                  className="btn btn-ghost mx-auto  flex w-fit items-center justify-center gap-2 rounded-md bg-yellow-400 p-2 px-4 font-vazirMedium text-base text-gray-800 shadow-md transition-all hover:bg-yellow-500"
                >
                  <p>info@jajiga.com</p>
                  <BiEnvelope />
                </button>
              </div>
              <p className="sc-c1a7c107-0 cUZHNR">
                <strong>آدرس پستی جاجیگا:</strong> پارک علم و فناوری گیلان -
                مرکز رشد رودسر - کد پستی ۴۴۸۱۸۳۶۱۸۱
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default SupportMessageModal;
