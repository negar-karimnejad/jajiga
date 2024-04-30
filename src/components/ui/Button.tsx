import { ReactNode } from 'react';

interface ButtonProps {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  style?: string;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  type = 'button',
  disabled = false,
  style = '',
  children,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`w-full rounded-md p-2 text-gray-800 transition-all hover:shadow-lg ${style}`}
    >
      {children}
    </button>
  );
};

export default Button;
