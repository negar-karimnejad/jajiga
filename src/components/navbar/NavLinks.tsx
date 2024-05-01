import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useAuthModal } from '../../hooks/useAuthModal';
import Button from '../ui/Button';

function NavLinks() {
  const { openModalHandler } = useAuthModal();
  const { user } = useAuth();

  return (
    <>
      {user ? (
        <Button style="font-vazirBold text-base text-white px-0 py-0 hover:shadow-none">
          اعلانات
        </Button>
      ) : (
        <button
          className="font-vazirBold text-base px-0 py-0 hover:shadow-none"
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
