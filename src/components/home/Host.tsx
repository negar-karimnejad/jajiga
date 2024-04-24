import { useNavigate } from 'react-router-dom';

function Host() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="mt-10 flex rounded-2xl bg-gradient-to-t from-yellow-200 to-yellow-400 dark:bg-gray-900 max-md:flex-col">
        <div className="relative flex-1 p-5 max-md:text-center">
          <div
            className="absolute left-0 top-0 h-full w-full
     bg-[url(/images/patterns/pattern.png)] opacity-90"
          ></div>
          <h2 className="mt-5 font-vazirBold text-xl">میزبان شوید</h2>
          <p className="py-5 text-sm text-gray-700 md:pb-14">
            میزبانان جاجیگا مردم واقعی هستند که فضای اقامتی بیش از نیاز خود را
            با شرایطی منصفانه به گردشگران اجاره می‌دهند و درآمدی شرافتمندانه کسب
            می‌کنند.
          </p>
          <button
            onClick={() => navigate('/host')}
            className="absolute bottom-4 w-fit rounded-full bg-neutral-700 p-2 text-sm text-gray-100 transition-all hover:bg-neutral-800 max-md:-bottom-5 max-md:left-0 max-md:right-0 max-md:m-auto max-md:border-2 max-md:border-yellow-300"
          >
            توضیحات بیشتر
          </button>
        </div>
        <div className="flex-1">
          <img
            src="/images/becomeHost.jpg"
            alt=""
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Host;
