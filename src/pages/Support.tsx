import { useState } from 'react';
import WhiteBgNavbar from '../components/navbar/WhiteBgNavbar';
import SupportButton from '../components/support/SupportButton';
import SupportCallModal from '../components/support/SupportCallModal';
import SupportHelpModal from '../components/support/SupportHelpModal';
import SupportMessageModal from '../components/support/SupportMessageModal';
import Breadcrumb from '../components/ui/Breadcrumb';
import FaqList from '../components/ui/FaqList';
import { faqDate } from '../data/data';
import SupportForm from '../components/support/SupportForm';

function Support() {
  const [isOpen, setIsOpen] = useState(0);

  const closeHandler = () => {
    setIsOpen(0);
  };
  const openHandler = (id: number) => {
    setIsOpen(id);
  };

  return (
    <>
      <div className="sticky top-0 z-10 bg-white py-2 shadow-md dark:bg-gray-900">
        <div className="container flex items-center justify-between gap-x-3">
          <WhiteBgNavbar />
        </div>
      </div>
      <div>
        <div className="h-24 w-full bg-yellow-400">
          <div className="h-full w-full bg-[url(/images/patterns/pattern.png)]">
            <Breadcrumb pageLink="پشتیبانی" />
          </div>
        </div>
        <div className="-mt-5 min-h-screen rounded-t-2xl bg-white dark:bg-gray-900">
          <div className="container flex gap-10 py-16 max-sm:flex-col">
            <div className="flex-1">
              <h2 className="mb-8 text-center font-vazirBold text-base dark:text-white">
                ارسال پیام به پشتیبانی
              </h2>
              <SupportForm />
              <div className="flex items-center justify-between gap-5">
                <SupportButton
                  id={1}
                  title="راهنما"
                  openHandler={openHandler}
                />
                <SupportButton id={2} title="تماس" openHandler={openHandler} />
                <SupportButton
                  id={3}
                  title="ارسال ایمیل"
                  openHandler={openHandler}
                />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="mb-5 text-center font-vazirBold text-base dark:text-white">
                سوالات متداول
              </h2>
              <FaqList list={faqDate} />
            </div>
          </div>
        </div>
      </div>

      {/* Support Modals */}
      <SupportCallModal isOpen={isOpen} closeHandler={closeHandler} />
      <SupportMessageModal isOpen={isOpen} closeHandler={closeHandler} />
      <SupportHelpModal isOpen={isOpen} closeHandler={closeHandler} />
    </>
  );
}

export default Support;
