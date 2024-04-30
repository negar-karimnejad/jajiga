import { ReactNode } from 'react';
import { BsCircleFill, BsFillCheckCircleFill } from 'react-icons/bs';

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
      <button
        onClick={() => changeActive(id)}
        className={`flex items-center gap-2 ${isActive === id && 'font-vazirMedium'}`}
      >
        <div className="flex h-4 w-4 items-center justify-center">
          {isActive === id ? (
            <BsFillCheckCircleFill size={16} />
          ) : (
            <BsCircleFill size={5} />
          )}
        </div>
        {children}
      </button>
    </li>
  );
}

export default HelpMenuItem;
