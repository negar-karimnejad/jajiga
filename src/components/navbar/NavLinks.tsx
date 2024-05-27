import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useAuthModal } from '../../hooks/useAuthModal';
import useRefHook from '../../hooks/useRefHook';
import Announcements from '../ui/Announcements';
import Button from '../ui/Button';
import { useWishes } from '../../context/WishesContext';

function NavLinks({ whiteBg }: { whiteBg?: boolean }) {
  const { user } = useAuth();
  const { wishes } = useWishes();
  const { openModalHandler } = useAuthModal();
  const { showModal, ref, isShowNotification } = useRefHook();

  return (
    <>
      {user ? (
        <Button
          style={`relative font-vazirBold pl-0 py-0 hover:shadow-none text-base ${whiteBg ? 'text-neutral-500 dark:text-white' : 'text-white'}`}
          onClick={showModal}
        >
          اعلانات
          <div
            ref={ref}
            className={`absolute right-0 top-full z-20 w-96 rounded-lg border bg-white p-4 shadow-lg transition-all dark:border-none dark:bg-gray-800 duration-500${isShowNotification ? 'visible opacity-100' : 'invisible hidden opacity-0'}`}
          >
            <Announcements />
          </div>
        </Button>
      ) : (
        <button
          className={`px-0 py-0 font-vazirBold text-base hover:shadow-none ${whiteBg ? 'text-neutral-500' : 'text-white'}`}
          onClick={openModalHandler}
        >
          ورود / ثبت نام
        </button>
      )}

      <Link
        className={`font-vazirBold text-base text-neutral-500 dark:text-white ${whiteBg ? 'text-neutral-500' : 'text-white'}`}
        to="/host"
      >
        میزبان شوید
      </Link>
      <Link
        className={`relative font-vazirBold text-base text-neutral-500 dark:text-white ${whiteBg ? 'text-neutral-500' : 'text-white'}`}
        to="/wishes"
      >
        علاقه مندی ها
        {wishes.length > 0 && (
          <span className="absolute -left-4 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 pt-1 font-persianNums text-sm text-black ">
            {wishes.length}
          </span>
        )}
      </Link>
    </>
  );
}

export default NavLinks;
