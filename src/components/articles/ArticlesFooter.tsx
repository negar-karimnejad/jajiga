import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../navbar/Logo';
import ArticlesSocials from './ArticlesSocials';
import Swal from 'sweetalert2';

function ArticlesFooter() {
  const [email, setEmail] = useState('');

  const submitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: 'success',
      title: 'ایمیل شما در خبرنامه ثبت شد',
    });
    setEmail('');
  };

  return (
    <div className="bg-yellow-400 py-5">
      <div className="container grid grid-cols-12 gap-y-10">
        <div className="flex flex-col items-center gap-3 max-md:col-span-12 md:col-span-6 lg:col-span-4">
          <h3 className="font-vazirBold text-lg">لینک ها</h3>
          <div className="grid grid-cols-12 gap-2">
            <Link
              className="col-span-6 w-40 rounded-full bg-white/50 px-2 py-1.5 font-vazirMedium text-sm text-gray-800 shadow"
              to="/"
            >
              سایت جاجیگا
            </Link>
            <Link
              className="col-span-6 w-40 rounded-full bg-white/50 px-2 py-1.5 font-vazirMedium text-sm text-gray-800 shadow"
              to="/s/shomal/villa"
            >
              اجاره ویلا شمال
            </Link>
            <Link
              className="col-span-6 w-40 rounded-full bg-white/50 px-2 py-1.5 font-vazirMedium text-sm text-gray-800 shadow"
              to="/s/cottage-forest"
            >
              اجاره کلبه جنگلی
            </Link>
            <Link
              className="col-span-6 w-40 rounded-full bg-white/50 px-2 py-1.5 font-vazirMedium text-sm text-gray-800 shadow"
              to="/s/pool"
            >
              اجاره ویلا استخردار
            </Link>
            <Link
              className="col-span-6 w-40 rounded-full bg-white/50 px-2 py-1.5 font-vazirMedium text-sm text-gray-800 shadow"
              to="/s/kish"
            >
              اجاره سوئیت در کیش
            </Link>
            <Link
              className="col-span-6 w-40 rounded-full bg-white/50 px-2 py-1.5 font-vazirMedium text-sm text-gray-800 shadow"
              to="/s/kordan"
            >
              اجاره ویلا در کردان
            </Link>
            <Link
              className="col-span-6 w-40 rounded-full bg-white/50 px-2 py-1.5 font-vazirMedium text-sm text-gray-800 shadow"
              to="/s/ramsar"
            >
              اجاره ویلا رامسر
            </Link>
            <Link
              className="col-span-6 w-40 rounded-full bg-white/50 px-2 py-1.5 font-vazirMedium text-sm text-gray-800 shadow"
              to="/s/tehran"
            >
              اجاره سوئیت در تهران
            </Link>
            <Link
              className="col-span-6 w-40 rounded-full bg-white/50 px-2 py-1.5 font-vazirMedium text-sm text-gray-800 shadow"
              to="/s/ruralhome"
            >
              اجاره خانه روستایی
            </Link>
            <Link
              className="col-span-6 w-40 rounded-full bg-white/50 px-2 py-1.5 font-vazirMedium text-sm text-gray-800 shadow"
              to="/s/tehransuburb"
            >
              اجاره ویلا اطراف تهران
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center max-md:col-span-12 md:col-span-6 lg:col-span-4">
          <Logo magLogo={true} />
          <p className="mb-5">جاجیگا، مثل خونه خودته :)</p>
          <ArticlesSocials />
        </div>
        <div className="flex flex-col items-center gap-3 max-md:col-span-12 md:col-span-12 lg:col-span-4">
          <form onSubmit={submitHandle}>
            <label htmlFor="email" className="font-vazirBold text-lg">
              خبرنامه ایمیلی
            </label>
            <input
              className="my-2 w-full p-2 outline-0"
              id="email"
              type="email"
              placeholder="ایمیل"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="w-full bg-red-600 p-2 text-white">
              اشتراک در خبرنامه
            </button>
          </form>
        </div>
      </div>
      <div className="mx-auto mt-10 flex items-center justify-center text-center text-[12px] text-gray-600 max-sm:max-w-96">
        کلیه حقوق این وبسایت متعلق به شرکت تجارت الکترونیک لوتوس آرمانی (سهامی
        خاص) می‌باشد.
      </div>
    </div>
  );
}

export default ArticlesFooter;
