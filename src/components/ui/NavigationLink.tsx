import { RiSuitcase2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useWishes } from '../../context/WishesContext';
import { useAuth } from '../../hooks/useAuth';

interface NavigationLinkProps {
  id: number;
  icon: JSX.Element;
  title: string;
  to: string;
}

function NavigationLink({ link }: { link: NavigationLinkProps }) {
  const { wishes } = useWishes();
  const { user } = useAuth();

  const trips = ['1'];

  const hasTrip = link.to === '/host' && user && trips.length > 0;

  return (
    <>
      {hasTrip ? (
        <Link
          to="/trips"
          className={`flex flex-1 flex-col items-center justify-center gap-1 transition-all hover:text-red-600 dark:text-white dark:hover:text-red-600 ${location.pathname === link.to ? 'border-b-4 border-b-red-600 text-red-600 dark:border-b-red-600 dark:text-red-600' : ''}`}
        >
          <span className="relative">
            <RiSuitcase2Line size={25} />

            {trips.length > 0 && (
              <span className="absolute -left-3 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 pt-1 font-persianNums text-sm text-black ">
                {trips.length}
              </span>
            )}
          </span>
          <span className="font-vazirMedium text-[13px]">سفرها</span>
        </Link>
      ) : (
        <Link
          to={link.to}
          className={`flex flex-1 flex-col items-center justify-center gap-1 transition-all hover:text-red-600 dark:text-white dark:hover:text-red-600 ${location.pathname === link.to ? 'border-b-4 border-b-red-600 text-red-600 dark:border-b-red-600 dark:text-red-600' : ''}`}
        >
          <span className="relative">
            {link.icon}
            {wishes.length > 0 && link.to === '/wishes' && (
              <span className="absolute -left-3 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 pt-1 font-persianNums text-sm text-black ">
                {wishes.length}
              </span>
            )}
          </span>
          <span className="font-vazirMedium text-[13px]">{link.title}</span>
        </Link>
      )}
    </>
  );
}

export default NavigationLink;
