import { BsShare, BsSuitcase } from 'react-icons/bs';
import { HiOutlineChatBubbleLeftEllipsis } from 'react-icons/hi2';
import FaqList from '../components/ui/FaqList';
import { faqDate } from '../data/data';
import Button from '../components/ui/Button';
import { useAuth } from '../hooks/useAuth';
import { useAuthModal } from '../hooks/useAuthModal';
import SigningModal from '../components/auth/SigningModal';

function Invite() {
  const { user } = useAuth();
  const { closeModalHandler, isOpen, openModalHandler } = useAuthModal();

  return (
    <>
      <div>
        <div className="h-56 w-full bg-[url(/images/invite-landing1920.webp)] bg-cover bg-center bg-no-repeat max-sm:h-52 max-sm:bg-[70%]"></div>
        <div className="-mt-5 flex justify-center rounded-t-3xl bg-white py-14 dark:bg-gray-800">
          <div className="flex max-w-4xl flex-col items-center justify-center gap-20">
            <div className="container">
              <h3 className="mb-5 font-vazirBold text-xl dark:text-white">
                با دعوت از دوستان، هدیه بگیرید:)
              </h3>
              <p className="text-sm leading-6 text-gray-700 dark:text-gray-300">
                وقتی هر یک از دوستان دعوت شده، در جاجیگا رزرو کنند یا میزبان
                شوند به تناسب مبلغ اولین رزرو ایشان، به شما تا 2۰۰ هزار تومان
                اعتبار هدیه اعطا می‌شود که می‌توانید در رزروهای بعدی خود هزینه
                کنید.
              </p>
            </div>
            <div className="container flex flex-col items-center justify-center gap-5 text-center">
              <h3 className="mb-8 font-vazirBold text-lg text-gray-700 dark:text-white">
                چگونه دوستانم را دعوت کنم؟
              </h3>
              <div className="flex gap-x-5 gap-y-12 max-md:flex-col">
                <div className="relative flex-1 rounded-3xl border-t-2 border-t-yellow-400 p-10 text-center shadow-lg dark:shadow-gray-950">
                  <div className="absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border-2 border-yellow-500 bg-yellow-400 p-0.5 dark:bg-gray-900 dark:text-white">
                    <BsShare size={30} />
                  </div>
                  <p className="pt-5 text-justify text-sm leading-6 text-gray-600 dark:text-gray-300">
                    لینک دعوت موجود در کادر بالا را کپی کنید و برای دوستان خود
                    بفرستید و ایشان را دعوت کنید.
                  </p>
                </div>
                <div className="relative flex-1 rounded-3xl border-t-2 border-t-yellow-400 p-10 text-center shadow-lg dark:shadow-gray-950">
                  <div className="absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border-2 border-yellow-500 bg-yellow-400 p-0.5 dark:bg-gray-900 dark:text-white">
                    <HiOutlineChatBubbleLeftEllipsis size={30} />
                  </div>
                  <p className="pt-5 text-justify text-sm leading-6 text-gray-600 dark:text-gray-300">
                    لینک دعوت را از طریق شبکه های اجتماعی یا هر روش دیگر برای
                    دوستان خود ارسال کنید.
                  </p>
                </div>
                <div className="relative flex-1 rounded-3xl border-t-2 border-t-yellow-400 p-10 text-center shadow-lg dark:shadow-gray-950">
                  <div className="absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border-2 border-yellow-500 bg-yellow-400 p-0.5 dark:bg-gray-900 dark:text-white">
                    <BsSuitcase size={30} />
                  </div>
                  <p className="pt-5 text-justify text-sm leading-6 text-gray-600 dark:text-gray-300">
                    به ازای هر یک از افراد دعوت شده، که برای اولین بار در جاجیگا
                    رزرو کنند، شما تا 2۰۰ هزار تومان اعتبار هدیه دریافت می‌کنید.
                  </p>
                </div>
              </div>
            </div>
            {!user && (
              <div>
                <p className="mb-4 text-center dark:text-gray-100">
                  برای شروع باید در سایت جاجیگا ثبت نام کنید
                </p>
                <div className="mx-auto w-32">
                  <Button
                    onClick={openModalHandler}
                    style="w-full rounded-md bg-yellow-400 text-gray-700 hover:bg-yellow-500 hover:text-gray-800 dark:text-black"
                  >
                    ورود و ثبت نام
                  </Button>
                </div>
              </div>
            )}
            <div>
              <h2 className="mb-3 text-center font-vazirBold text-lg dark:text-white md:text-2xl">
                سوالات متداول
              </h2>
              <FaqList list={faqDate} />
            </div>
          </div>
        </div>
      </div>
      {isOpen && <SigningModal />}
    </>
  );
}

export default Invite;
