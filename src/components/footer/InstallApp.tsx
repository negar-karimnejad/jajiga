import { Link } from 'react-router-dom';
import Heading from './Heading';

interface InstallAppLinkProps {
  to?: string;
  image: string;
}

const InstallAppLink = ({ to, image }: InstallAppLinkProps) => {
  return (
    <>
      {to ? (
        <Link target="_blank" to={to}>
          <img
            loading="lazy"
            src={image}
            className="h-12 w-full rounded-md bg-black object-contain dark:border dark:border-gray-900 md:h-10"
            alt="phone"
          />
        </Link>
      ) : (
        <img
          loading="lazy"
          src={image}
          className="h-12 w-full rounded-md bg-black object-contain dark:border dark:border-gray-900 md:h-10"
          alt="phone"
        />
      )}
    </>
  );
};

function InstallApp() {
  return (
    <div>
      <Heading>نصب اپلیکیشن جاجیگا</Heading>
      <div className="flex gap-2">
        <div className="flex w-full flex-col gap-2">
          <InstallAppLink
            to="https://cafebazaar.ir/app/com.jajiga.app"
            image="/images/app-store/Bazzar.png"
          />
          <InstallAppLink
            to="https://myket.ir/app/com.jajiga.app"
            image="/images/app-store/Myket.png"
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <InstallAppLink
            to="https://play.google.com/store/apps/details?id=com.jajiga.app"
            image="/images/app-store/PlayStore.png"
          />
          <InstallAppLink image="/images/app-store/WebApp.png" />
        </div>
      </div>
    </div>
  );
}

export default InstallApp;
