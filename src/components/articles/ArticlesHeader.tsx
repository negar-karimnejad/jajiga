import { useEffect, useState } from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { IoClose, IoSearch } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useArticles } from '../../hooks/useArticles';
import Logo from '../navbar/Logo';
import Button from '../ui/Button';
import ArticlesSocials from './ArticlesSocials';

function ArticlesHeader() {
  const [activeNavLink, setActiveNavLink] = useState('main');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { hosting, knowing, travelers, news, wherewhy } = useArticles();

  useEffect(() => {
    // Disable body scroll when the modal is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <div className="sticky top-0 z-40 bg-white shadow-md dark:border-b dark:border-b-gray-400 dark:bg-gray-700">
      <div className="container flex w-full items-center justify-between">
        <div>
          {/* Start Search&Menu Icon */}
          <div className="flex cursor-pointer items-center gap-4">
            <div
              className="w-8 rounded-full transition-all hover:text-sky-600 dark:text-white"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-7 w-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
            <div className="relative">
              <div onClick={() => setIsSearchOpen((prev) => !prev)}>
                <div className="flex h-8 w-8 cursor-pointer items-center justify-center transition-all hover:text-sky-600 dark:text-white">
                  {isSearchOpen ? (
                    <IoClose className="h-8 w-8 bg-gray-100 p-1.5 dark:bg-gray-600" />
                  ) : (
                    <IoSearch size={20} />
                  )}
                </div>
              </div>
              {isSearchOpen && (
                <div className="absolute right-0 top-9 w-80 max-w-96 border border-gray-100 bg-white p-5 px-10 shadow-lg dark:border-gray-400 dark:bg-gray-700">
                  <form className="flex flex-col gap-2">
                    <input
                      className="rounded-sm border border-gray-100 p-2 outline-0 placeholder:text-[12px] placeholder:text-gray-300 dark:border-0 dark:bg-gray-800 dark:text-white"
                      type="text"
                      placeholder="عبارت کلیدی خود را بنویسید..."
                    />
                    <Button style="text-white bg-sky-400 hover:bg-sky-500">
                      جستجو
                    </Button>
                  </form>
                </div>
              )}
            </div>
          </div>
          {/* Finish Search&Menu Icon */}

          {/* Start NavMenue Modal */}
          <div
            className={`fixed right-0 top-0 h-screen w-full bg-black/60 transition-all duration-500 ${isMenuOpen ? 'visible z-50 opacity-100' : 'invisible z-0 opacity-0'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <div
              style={{ direction: 'ltr' }}
              onClick={(e) => e.stopPropagation()}
              className={`absolute top-0 z-50 h-screen w-[420px] overflow-y-scroll rounded-s-xl bg-gray-100 pb-10 shadow transition-all duration-500 dark:bg-gray-900 max-[490px]:w-[300px] sm:w-[360px] ${isMenuOpen ? 'right-0' : '-right-[420px]'}`}
            >
              <header className="flex w-full items-center justify-center bg-white py-3 shadow-lg dark:bg-gray-700 dark:shadow-sm dark:shadow-gray-100/50">
                <Button
                  style="h-6 w-6 py-0 font-vazirBold text-3xl hover:shadow-none text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  &times;
                </Button>
              </header>
              <div className="px-6">
                <Link
                  to="/"
                  className="my-6 grid grid-cols-12 items-center justify-center bg-yellow-400 px-3 py-2 text-lg shadow hover:text-blue-600"
                >
                  <HiOutlineExternalLink
                    size={22}
                    className="col-span-2 -rotate-90"
                  />
                  <span className="col-span-8 text-center">وب سایت جاجیگا</span>
                  <div className="col-span-2"></div>
                </Link>
                <div
                  className="bg-white p-4 shadow-lg dark:bg-gray-800"
                  style={{ direction: 'rtl' }}
                >
                  <h3 className="font-vazirBold text-lg">دسته ها</h3>
                  <ul className="my-3">
                    <li className="group border-b py-2">
                      <Link
                        to="/mag/category/wherewhy"
                        className="flex items-center justify-between"
                      >
                        <p className="font-vazirBold text-sm text-gray-600 transition-all duration-500 group-hover:-translate-x-2 group-hover:text-sky-600 dark:text-white">
                          سفر به کجا؟
                        </p>
                        <div className="font-persianNums flex h-7 w-7 items-center justify-center rounded-full bg-sky-600 p-0.5 text-[13px] text-white">
                          {wherewhy.length}
                        </div>
                      </Link>
                    </li>
                    <li className="group border-b py-2">
                      <Link
                        to="/mag/category/news"
                        className="flex items-center justify-between"
                      >
                        <p className="font-vazirBold text-sm text-gray-600 transition-all duration-500 group-hover:-translate-x-2 group-hover:text-red-600 dark:text-white">
                          جاجیگا راپُرت
                        </p>
                        <div className="font-persianNums flex h-7 w-7 items-center justify-center rounded-full bg-red-600 p-0.5 text-[13px] text-white">
                          {news.length}
                        </div>
                      </Link>
                    </li>
                    <li className="group border-b py-2">
                      <Link
                        to="/mag/category/travelers"
                        className="flex items-center justify-between"
                      >
                        <p className="font-vazirBold text-sm text-gray-600 transition-all duration-500 group-hover:-translate-x-2 group-hover:text-orange-600 dark:text-white">
                          بچه های سفری
                        </p>
                        <div className="font-persianNums flex h-7 w-7 items-center justify-center rounded-full bg-orange-600 p-0.5 text-[13px] text-white">
                          {travelers.length}
                        </div>
                      </Link>
                    </li>
                    <li className="group border-b py-2">
                      <Link
                        to="/mag/category/knowing"
                        className="flex items-center justify-between"
                      >
                        <p className="font-vazirBold text-sm text-gray-600 transition-all duration-500 group-hover:-translate-x-2 group-hover:text-purple-600 dark:text-white">
                          دانستنی ها
                        </p>
                        <div className="font-persianNums flex h-7 w-7 items-center justify-center rounded-full bg-purple-600 p-0.5 text-[13px] text-white">
                          {knowing?.length}
                        </div>
                      </Link>
                    </li>
                    <li className="group py-2">
                      <Link
                        to="/mag/category/hosting"
                        className="flex items-center justify-between"
                      >
                        <p className="font-vazirBold text-sm text-gray-600 transition-all duration-500 group-hover:-translate-x-2 group-hover:text-emerald-600 dark:text-white">
                          میزبانی در جاجیگا
                        </p>
                        <div className="font-persianNums flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 p-0.5 text-[13px] text-white">
                          {hosting?.length}
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className="mt-8 bg-white p-4 shadow-lg dark:bg-gray-800"
                  style={{ direction: 'rtl' }}
                >
                  <h3 className="mb-8 font-vazirBold text-lg dark:text-white">
                    جاجیگا را دنبال کنید
                  </h3>
                  <div className="flex justify-center">
                    <ArticlesSocials />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Finish NavMenue Modal */}
        </div>

        {/* Start NavLinks */}
        <div className="flex shrink-0 gap-8 text-gray-700 dark:text-gray-50 max-lg:hidden">
          <Link
            className={`font-vazirBold text-base transition-all hover:text-sky-500 ${activeNavLink === 'main' ? 'text-sky-500' : ''}`}
            to="/mag"
            onClick={() => setActiveNavLink('main')}
          >
            صفحه نخست
          </Link>
          <Link
            className={`font-vazirBold text-base transition-all hover:text-sky-500 ${activeNavLink === 'travelers' ? 'text-sky-500' : ''}`}
            to="/mag/category/travelers"
            onClick={() => setActiveNavLink('travelers')}
          >
            بچه های سفری
          </Link>
          <Link
            className={`font-vazirBold text-base transition-all hover:text-sky-500 ${activeNavLink === 'wherewhy' ? 'text-sky-500' : ''}`}
            to="/mag/category/wherewhy"
            onClick={() => setActiveNavLink('wherewhy')}
          >
            سفر به کجا؟
          </Link>
          <Link
            className={`font-vazirBold text-base transition-all hover:text-sky-500 ${activeNavLink === 'knowing' ? 'text-sky-500' : ''}`}
            to="/mag/category/knowing"
            onClick={() => setActiveNavLink('knowing')}
          >
            دانستنی ها
          </Link>
          <Link
            className={`font-vazirBold text-base transition-all hover:text-sky-500 ${activeNavLink === 'news' ? 'text-sky-500' : ''}`}
            to="/mag/category/news"
            onClick={() => setActiveNavLink('news')}
          >
            جایگاه راپُرت
          </Link>
          <Link
            className={`font-vazirBold text-base transition-all hover:text-sky-500 ${activeNavLink === 'hosting' ? 'text-sky-500' : ''}`}
            to="/mag/category/hosting"
            onClick={() => setActiveNavLink('hosting')}
          >
            میزبانی در جاجیگا
          </Link>
        </div>
        {/* Finish NavLinks */}

        {/* NavLogo */}
        <Logo magLogo={true} />
      </div>
    </div>
  );
}

export default ArticlesHeader;
