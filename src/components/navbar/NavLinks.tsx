import { Link } from 'react-router-dom';

function NavLinks() {
  return (
    <div className="flex gap-8 shrink-0 max-md:hidden">
      <Link className="font-vazirBold text-gray-500" to="">
        ورود / ثبت نام
      </Link>
      <Link className="font-vazirBold text-gray-500" to="/host">
        میزبان شوید
      </Link>
      <Link className="font-vazirBold text-gray-500" to="/wishes">
        علاقه مندی ها
      </Link>
    </div>
  );
}

export default NavLinks;
