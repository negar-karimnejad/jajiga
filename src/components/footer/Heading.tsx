import { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
}

function Heading({ children }: HeadingProps) {
  return (
    <p className="mb-3 text-center font-vazirBold text-sm text-gray-700">
      {children}
    </p>
  );
}

export default Heading;
