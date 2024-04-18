import { Link } from 'react-router-dom';
interface LogoProps {
  withTitle: boolean;
}

function Logo({ withTitle }: LogoProps) {
  return (
    <Link to="/">
      {withTitle ? (
        <img src="/images/logo/logo1.png" className="w-36" alt="" />
      ) : (
        <img src="/images/logo/logo.png" className="w-12" alt="" />
      )}
    </Link>
  );
}

export default Logo;
