import { ReactNode } from 'react';
import { BsCircleFill, BsFillCheckCircleFill } from 'react-icons/bs';
import Button from '../ui/Button';

interface HelpMenuItemProps {
  id: number;
  isActive: number;
  changeActive: (id: number) => void;
  children: ReactNode;
}

function HelpMenuItem({
  id,
  isActive,
  changeActive,
  children,
}: HelpMenuItemProps) {
  return (
    <li>
      <Button
        onClick={() => changeActive(id)}
        style={`flex items-center dark:text-white hover:shadow-none px-0 py-0 gap-2 ${isActive === id && 'font-vazirMedium'}`}
      >
        <div className="flex h-4 w-4 items-center justify-center">
          {isActive === id ? (
            <BsFillCheckCircleFill size={16} />
          ) : (
            <BsCircleFill size={5} />
          )}
        </div>
        {children}
      </Button>
    </li>
  );
}

export default HelpMenuItem;
