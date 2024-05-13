import { GrEdit } from 'react-icons/gr';
import Application from '../components/home/Application';
import WhiteBgNavbar from '../components/navbar/WhiteBgNavbar';
import Breadcrumb from '../components/ui/Breadcrumb';

const profileData = [
  { id: 1, title: 'نام و نام خانوادگی', value: 'سارا نظری' },
  { id: 2, title: 'شماره موبایل', value: '09123456789' },
  { id: 3, title: 'شماره تماس دوم (اضطراری)', value: '' },
  { id: 4, title: 'آدرس ایمیل', value: '' },
  { id: 5, title: 'کد ملی و تصویر کارت ملی', value: '' },
  { id: 6, title: 'جنسیت', value: 'زن' },
  { id: 7, title: 'درباره خودتان', value: '' },
];
function Profile() {
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
                <div key={item.id} className="w-full border-b dark:border-b-gray-600 py-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-md font-vazirBold dark:text-white">
                      {item.title}
                    </h3>
                    <button type="button" className='dark:text-white'>
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
