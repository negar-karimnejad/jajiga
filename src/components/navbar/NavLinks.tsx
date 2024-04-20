import { Link } from 'react-router-dom';

function NavLinks() {
  return (
    <>
      <Link className="font-vazirBold text-base" to="">
        ورود / ثبت نام
      </Link>
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
