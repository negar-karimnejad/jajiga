import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

function Host() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-white pt-10 dark:bg-gray-900">
      <div className="container">
        <div className="flex rounded-2xl bg-gradient-to-t from-yellow-200 to-yellow-400 dark:bg-gray-900 max-md:flex-col">
          <div className="relative flex-1 p-5 max-md:text-center">
            <div className="absolute left-0 top-0 h-full w-full bg-[url(/images/patterns/pattern.png)] opacity-90"></div>
            <h2 className="mt-5 font-vazirBold text-xl">میزبان شوید</h2>
            <p className="py-5 text-sm text-gray-700 md:pb-14">
              میزبانان جاجیگا مردم واقعی هستند که فضای اقامتی بیش از نیاز خود را
              با شرایطی منصفانه به گردشگران اجاره می‌دهند و درآمدی شرافتمندانه
              کسب می‌کنند.
            </p>
            <Button
              onClick={() => navigate('/host')}
              style="absolute text-white bottom-4 w-fit rounded-full bg-neutral-700 text-[12px] px-3 text-gray-100 hover:bg-neutral-800 max-md:-bottom-5 max-md:left-0 max-md:right-0 max-md:m-auto max-md:border-2 max-md:border-yellow-300"
            >
              توضیحات بیشتر
            </Button>
          </div>
          <div className="flex-1">
            <img
              loading="lazy"
              src="/images/becomeHost.jpg"
              alt="میزبان شو"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Host;
