import { GrEdit } from 'react-icons/gr';
import Application from '../components/home/Application';
import WhiteBgNavbar from '../components/navbar/WhiteBgNavbar';
import Breadcrumb from '../components/ui/Breadcrumb';
import { useAuth } from '../hooks/useAuth';

function Profile() {
  const { user } = useAuth();
  const userName = user?.user_metadata?.fullname;
  const userEmail = user?.email;
  if (!user) return null;

  const profileData = [
    {
      id: 1,
      title: 'نام و نام خانوادگی',
      value: `${userName ? userName : ''}`,
    },
    { id: 2, title: 'آدرس ایمیل', value: `${userEmail ? userEmail : ''}` },
    { id: 3, title: 'شماره موبایل', value: '' },
    { id: 4, title: 'شماره تماس دوم (اضطراری)', value: '' },
    { id: 5, title: 'آدرس ایمیل', value: '' },
    { id: 6, title: 'کد ملی و تصویر کارت ملی', value: '' },
    { id: 7, title: 'جنسیت', value: '' },
    { id: 8, title: 'درباره خودتان', value: '' },
  ];

  return (
    <>
      <Application style="h-12" />
      <div className="mx-auto w-full border-b bg-white py-2 dark:border-0 dark:bg-gray-800 lg:gap-x-10">
        <div className="container flex items-center justify-between gap-x-3">
          <WhiteBgNavbar />
        </div>
      </div>
      <div className="relative">
        <div className="h-24 w-full bg-yellow-400">
          <div className="h-full w-full bg-[url(/images/patterns/pattern.png)]">
            <Breadcrumb pageLink="حساب کاربری" />
          </div>
        </div>
        <div className="-mt-5 h-screen rounded-t-2xl bg-white dark:bg-gray-800">
          <div className="container flex flex-col items-center justify-center gap-5 py-10">
            <div className="container grid w-full grid-cols-1 gap-x-20 md:grid-cols-2">
              {profileData.map((item) => (
                <div
                  key={item.id}
                  className="w-full border-b py-5 dark:border-b-gray-600"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-md font-vazirBold dark:text-white">
                      {item.title}
                    </h3>
                    <button type="button" className="dark:text-white">
                      <GrEdit size={20} />
                    </button>
                  </div>
                  <p className="mt-3 h-5 text-gray-500 dark:text-gray-300">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
