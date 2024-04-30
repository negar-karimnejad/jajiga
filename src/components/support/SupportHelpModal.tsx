import HelpSection from '../help/HelpSection';
import Button from '../ui/Button';

function SupportHelpModal({
  closeHandler,
  isOpen,
}: {
  closeHandler: () => void;
  isOpen: number;
}) {
  return (
    <div
      className={`fixed right-0 top-0 h-screen w-full bg-black/60 transition-all duration-500 ${isOpen === 1 ? 'visible z-50 opacity-100' : 'invisible z-0 opacity-0'}`}
      onClick={closeHandler}
    >
      <div className="relative w-[530px] max-[600px]:w-[450px] max-[490px]:w-[330px]">
        <Button style="absolute -left-3 top-2 px-0 py-0 font-vazirBold text-4xl text-white hover:shadow-none">
          &times;
        </Button>
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute top-0 z-50 h-screen w-[500px] overflow-y-scroll rounded-s-xl bg-white pt-3 shadow transition-all duration-500 dark:border-l-4 dark:border-l-gray-800 dark:bg-gray-900 max-[600px]:w-[420px] max-[490px]:w-[300px] ${isOpen === 1 ? 'right-0' : '-right-[420px]'}`}
        >
          <HelpSection modal={true} />
        </div>
      </div>
    </div>
  );
}

export default SupportHelpModal;
