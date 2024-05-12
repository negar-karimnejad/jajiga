import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useAuthModal } from '../../hooks/useAuthModal';
import useRefHook from '../../hooks/useRefHook';
import Button from '../ui/Button';

function NavLinks({ whiteBg }: { whiteBg?: boolean }) {
  const { openModalHandler } = useAuthModal();
  const { user } = useAuth();
  const { ref, showModal, isShowNotification } = useRefHook();

  return (
    <>
      {!user ? (
        <Button
          style={`relative font-vazirBold pl-0 py-0 hover:shadow-none text-base ${whiteBg ? 'text-black/60 dark:text-white' : 'text-white'}`}
          onClick={showModal}
        >
          اعلانات
          <div
            ref={ref}
            className={`absolute right-0 top-full rounded-lg border bg-white p-4 shadow-lg transition-all dark:bg-gray-700 duration-500${isShowNotification ? 'visible opacity-100' : 'invisible opacity-0'}`}
          >
            <div>
              <h4>اعلانات</h4>
            </div>
          </div>
        </Button>
      ) : (
        <button
          className="px-0 py-0 font-vazirBold text-base hover:shadow-none"
          onClick={openModalHandler}
        >
          ورود / ثبت نام
        </button>
      )}

      <Link className="font-vazirBold text-base" to="/host">
        میزبان شوید
      </Link>
      <Link className="font-vazirBold text-base" to="/wishes">
        علاقه مندی ها
      </Link>
    </>
  );
}

export default NavLinks;
