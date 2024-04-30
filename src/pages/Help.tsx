import HelpSection from '../components/help/HelpSection';
import WhiteBgNavbar from '../components/navbar/WhiteBgNavbar';
import Breadcrumb from '../components/ui/Breadcrumb';

function Help() {
  return (
    <>
      <div className="sticky top-0 bg-white py-2 shadow-md dark:bg-gray-900">
        <div className="container flex items-center justify-between gap-x-3">
          <WhiteBgNavbar />
        </div>
      </div>
      <div>
        <div className="h-24 w-full bg-yellow-400">
          <div className="h-full w-full bg-[url(/images/patterns/pattern.png)]">
            <Breadcrumb pageLink="راهنما" />
          </div>
        </div>
      </div>
      <HelpSection />
    </>
  );
}

export default Help;
