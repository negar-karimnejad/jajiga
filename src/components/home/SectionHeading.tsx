import { ReactNode } from 'react';

interface SectionHeadingprops {
  children: ReactNode;
}

function SectionHeading({ children }: SectionHeadingprops) {
  return <div className="pb-4 pt-12 font-vazirMedium text-xl">{children}</div>;
}

export default SectionHeading;
