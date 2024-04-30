import { ReactNode } from 'react';

interface ButtonProps {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  children,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`w-full rounded-md bg-yellow-400 p-2 text-gray-800 transition-all hover:bg-yellow-500 ${className ? className : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
