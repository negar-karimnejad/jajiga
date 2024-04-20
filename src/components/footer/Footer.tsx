import AccessLinks from './AccessLinks';
import Copyright from './Copyright';
import Enamad from './Enamad';
import InstallApp from './InstallApp';
import QuickSearch from './QuickSearch';
import Socials from './Socials';

function Footer() {
  return (
    <div className="rounded-t-3xl bg-gray-100 relative">
      <div className="container grid grid-cols-12 justify-between gap-10 py-10">
        <div className="col-span-12 flex flex-col gap-8 lg:col-span-9">
          <div className="flex flex-col justify-between gap-7 md:flex-row">
            <AccessLinks />
            <InstallApp />
            <Socials />
          </div>
          <QuickSearch />
        </div>
        <Enamad />
      </div>
      <Copyright />
    </div>
  );
}

export default Footer;
