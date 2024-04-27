import { Link } from 'react-router-dom';
import { useAuthModal } from '../../hooks/useAuthModal';

function NavLinks() {
  const { openModalHandler } = useAuthModal();
  return (
    <>
      <button className="font-vazirBold text-base" onClick={openModalHandler}>
        ورود / ثبت نام
      </button>
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
