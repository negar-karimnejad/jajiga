import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface SocialLinkProps {
    style: string;
    to: string;
    followers: string;
    icon: ReactNode;
  }

const SocialLink = ({ style, to, followers, icon }: SocialLinkProps) => {
  return (
    <Link
      target="_blank"
      className={`flex h-12 w-full items-center justify-center gap-3 rounded-md bg-black bg-gradient-to-r from-purple-600 via-red-600 to-orange-500 shadow md:h-10 md:w-40 ${style}`}
      to={to}
    >
      <span
        className="font-vazirMedium text-base text-white"
        style={{ direction: 'ltr' }}
      >
        {followers} k
      </span>
      {icon}
    </Link>
  );
};

export default SocialLink;
