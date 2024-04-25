import Breadcrumb from '../components/ui/Breadcrumb';
import FaqList from '../components/ui/FaqList';

function Faq() {
  return (
    <div className="relative">
      <div className="h-24 w-full bg-yellow-400">
        <div className="container h-full w-full bg-[url(/images/patterns/pattern.png)]">
          <Breadcrumb pageLink="سوالات متداول" />
        </div>
      </div>
      <FaqList />
    </div>
  );
}

export default Faq;
