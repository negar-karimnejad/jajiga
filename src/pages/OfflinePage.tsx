import { useNavigate } from 'react-router-dom';
import { useNetworkCheck } from '../OfflineRedirect ';
import Logo from '../components/navbar/Logo';
import Button from '../components/ui/Button';
import Loader from '../components/ui/Loader';

const OfflinePage = () => {
  const { isOnline } = useNetworkCheck();
  const navigate = useNavigate();

  if (isOnline) {
    navigate(-1);
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex h-screen items-center justify-center bg-[#d2efff]">
      <div className="absolute left-4 top-4 brightness-90">
        <Logo />
      </div>
      <div className="container flex items-center justify-center gap-10 max-lg:flex-col lg:items-end">
        <img src="/images/no-connection.png" alt="" />
        <div className="max-lg:text-center">
          <h1 className="mb-8 font-vazirBold text-3xl">
            اینترنت در دسترس نیست
          </h1>
          <ul className="mb-8 leading-7 lg:mr-10 lg:list-disc">
            <li>لطفا تنظیمات اینترنت خود را بررسی کنید</li>
            <li>از غیر فعال بودن vpn خود مطمئن شوید</li>
          </ul>
          <Button style="bg-yellow-400 rounded-full px-5 py-3 font-vazirMedium">
            دوباره امتحان کنید
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OfflinePage;
