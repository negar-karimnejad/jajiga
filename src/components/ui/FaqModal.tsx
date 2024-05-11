import { faqDate } from '../../data/data';
import Button from '../ui/Button';
import FaqList from './FaqList';

function FaqModal({
  closeHandler,
  isOpen,
}: {
  closeHandler: () => void;
  isOpen: boolean;
}) {
  return (
    <div
      className={`fixed right-0 top-0 z-40 h-screen w-full cursor-default bg-black/60 transition-all duration-500 max-sm:px-5 ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
      onClick={closeHandler}
    >
      <Button
        onClick={closeHandler}
        style="absolute top-3 right-0 max-[490px]:w-[850px] w-[850px] left-10 px-0 py-0 hover:shadow-none font-vazirBold text-4xl text-white"
      >
        &times;
      </Button>
      <div
        style={{ direction: 'ltr' }}
        onClick={(e) => e.stopPropagation()}
        className={`absolute right-0 top-0 h-screen w-[400px] overflow-y-scroll rounded-l-2xl bg-white shadow transition-all duration-500 dark:bg-gray-500 dark:text-white max-[490px]:w-[300px] ${isOpen ? 'translate-x-0' : 'translate-x-96'}`}
      >
        <h2 className="h-20 pt-3 text-center font-vazirBold text-xl dark:text-white">
          پرسش و پاسخ
        </h2>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-800">
          <FaqList list={faqDate} />
        </div>
      </div>
    </div>
  );
}

export default FaqModal;
