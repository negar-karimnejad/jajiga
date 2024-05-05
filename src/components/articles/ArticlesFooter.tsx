import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { QuickSearchLinks } from '../footer/QuickSearch';
import Logo from '../navbar/Logo';
import Button from '../ui/Button';
import ArticlesSocials from './ArticlesSocials';

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
    <div className="bg-yellow-400 py-5 dark:bg-gray-950">
      <div className="container grid grid-cols-12 gap-y-10">
        <div className="flex flex-col items-center gap-3 max-md:col-span-12 md:col-span-6 lg:col-span-4">
          <h3 className="font-vazirBold text-lg dark:text-white">لینک ها</h3>
          <div className="grid grid-cols-12 gap-2">
            {QuickSearchLinks.slice(0, 10).map((link) => (
              <Link
                key={link.title}
                className="col-span-6 w-40 rounded-full bg-white/40 px-2 py-1.5 font-vazirMedium text-sm text-gray-600 shadow transition-all hover:text-black dark:text-white dark:hover:text-black"
                to={link.to}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center max-md:col-span-12 md:col-span-6 lg:col-span-4">
          <Logo magLogo={true} />
          <p className="mb-5 dark:text-white">جاجیگا، مثل خونه خودته :)</p>
          <ArticlesSocials />
        </div>
        <div className="flex flex-col items-center gap-3 max-md:col-span-12 md:col-span-12 lg:col-span-4">
          <form onSubmit={submitHandle}>
            <label
              htmlFor="email"
              className="font-vazirBold dark:text-white text-lg"
            >
              خبرنامه ایمیلی
            </label>
            <input
              className="input input-md my-2 w-full"
              id="email"
              type="email"
              placeholder="ایمیل"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              type="submit"
              style="rounded-md w-full bg-red-600 text-white hover:bg-red-700"
            >
              اشتراک در خبرنامه
            </Button>
          </form>
        </div>
      </div>
      <div className="mx-auto mt-10 flex items-center justify-center text-center text-[12px] text-gray-600 dark:text-gray-300 max-sm:max-w-96">
        کلیه حقوق این وبسایت متعلق به شرکت تجارت الکترونیک لوتوس آرمانی (سهامی
        خاص) می‌باشد.
      </div>
    </div>
  );
}

export default ArticlesFooter;
