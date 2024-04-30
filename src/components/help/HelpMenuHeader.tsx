import Button from '../ui/Button';
interface HelpMenuHeaderProps {
  heading: string;
  resetActive: () => void;
  modal?: boolean;
}

function HelpMenuHeader({ heading, resetActive, modal }: HelpMenuHeaderProps) {
  return (
    <div
      className={`mb-10 flex items-center justify-between ${modal ? 'absolute right-0 top-0 w-full bg-yellow-400 p-2 text-gray-700' : 'text-gray-400 dark:text-gray-200'}`}
    >
      <h2 className="text-xl">{heading}</h2>
      <Button
        onClick={resetActive}
        style="group py-0 px-0 flex items-center gap-1"
      >
        <p className="text-lg text-blue-600 transition-all duration-700 group-hover:translate-x-2">
          &rarr;
        </p>
        <span className="text-blue-600">بازگشت</span>
      </Button>
    </div>
  );
}

export default HelpMenuHeader;
