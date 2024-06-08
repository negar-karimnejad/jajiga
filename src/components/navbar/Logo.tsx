import { Link } from 'react-router-dom';
interface LogoProps {
  withTitle?: boolean;
  articleLogo?: boolean;
}

function Logo({ withTitle, articleLogo }: LogoProps) {
  return (
    <>
      {articleLogo ? (
        <Link to="/article">
          <img
            loading="lazy"
            src="/images/logo/jajiga_mag.png"
            className="w-32"
            alt="logo"
          />
        </Link>
      ) : (
        <Link to="/">
          {!withTitle ? (
            <img
              loading="lazy"
              src="/images/logo/logo.png"
              className="w-12"
              alt="logo"
            />
          ) : (
            <img
              loading="lazy"
              src="/images/logo/logo1.png"
              className="w-36"
              alt="logo"
            />
          )}
        </Link>
      )}
    </>
  );
}

export default Logo;
