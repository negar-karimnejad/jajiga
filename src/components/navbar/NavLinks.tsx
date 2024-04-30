import { Link } from 'react-router-dom';
import { useAuthModal } from '../../hooks/useAuthModal';
import { useAuth } from '../../hooks/useAuth';

function NavLinks() {
  const { openModalHandler } = useAuthModal();
  const { user } = useAuth();

  return (
    <>
      {user ? (
        <button className="font-vazirBold text-base">اعلانات</button>
      ) : (
        <button
         className="font-vazirBold text-base" onClick={openModalHandler}>
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
