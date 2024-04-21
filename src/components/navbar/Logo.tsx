import { Link } from 'react-router-dom';
interface LogoProps {
  withTitle?: boolean;
  magLogo?: boolean;
}

function Logo({ withTitle, magLogo }: LogoProps) {
  return (
    <>
      {magLogo ? (
        <Link to="/mag">
          <img src="/images/logo/jajiga_mag.png" className="w-38" alt="logo" />
        </Link>
      ) : (
        <Link to="/">
          {!withTitle ? (
            <img src="/images/logo/logo.png" className="w-12" alt="logo" />
          ) : (
            <img src="/images/logo/logo1.png" className="w-36" alt="logo" />
          )}
        </Link>
      )}
    </>
  );
}

export default Logo;
