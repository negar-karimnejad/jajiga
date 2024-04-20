import { Link } from 'react-router-dom';

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
            src={image}
            className="h-12 w-full rounded-md bg-black object-contain md:h-10"
            alt="phone"
          />
        </Link>
      ) : (
        <img
          src={image}
          className="h-12 w-full rounded-md bg-black object-contain md:h-10"
          alt="phone"
        />
      )}
    </>
  );
};

function InstallApp() {
  return (
    <div>
      <p className="mb-5 text-center font-vazirBold text-sm text-gray-700">
        نصب اپلیکیشن جاجیگا
      </p>
      <div className="flex gap-3">
        <div className="flex w-full flex-col gap-3">
          <InstallAppLink
            to="https://cafebazaar.ir/app/com.jajiga.app"
            image="/images/app-store/Bazzar.png"
          />
          <InstallAppLink
            to="https://myket.ir/app/com.jajiga.app"
            image="/images/app-store/Myket.png"
          />
        </div>
        <div className="flex w-full flex-col gap-3">
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
