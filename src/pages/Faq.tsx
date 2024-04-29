import Breadcrumb from '../components/ui/Breadcrumb';
import FaqList from '../components/ui/FaqList';
import { faqDate } from '../data/data';

function Faq() {
  return (
    <div className="relative">
      <div className="h-24 w-full bg-yellow-400">
        <div className="container h-full w-full bg-[url(/images/patterns/pattern.png)]">
          <Breadcrumb pageLink="سوالات متداول" />
        </div>
      </div>
      <div className="-mt-5 rounded-t-2xl bg-white dark:bg-gray-800">
        <FaqList list={faqDate} />
      </div>
    </div>
  );
}

export default Faq;
