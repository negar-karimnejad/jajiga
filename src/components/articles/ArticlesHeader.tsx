import { useEffect, useState } from 'react';
import { IoClose, IoSearch } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Logo from '../navbar/Logo';
import Button from '../ui/Button';
import ArticalMenu from './ArticalMenu';

function ArticlesHeader({ id }: { id?: string }) {
  // const [searchResult, setSearchResult] = useState<Article[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState('');

  // const navigate = useNavigate();
  // const { articles } = useArticles();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    // Disable body scroll when the modal is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  // const submitHandler = (e: SubmitEvent) => {
  //   e.preventDefault();
  //   setSearchResult(
  //     articles.filter((article) => article.title.includes(search)),
  //   );
  //   navigate(`/mag/?s=${search}`);
  // };
  // console.log(searchResult);

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
                  <form
                    // onSubmit={submitHandler}
                    className="flex flex-col gap-2"
                  >
                    <input
                      className="rounded-sm border border-gray-100 p-2 outline-0 placeholder:text-[12px] placeholder:text-gray-400 dark:border-0 dark:bg-gray-800 dark:text-white"
                      type="text"
                      placeholder="عبارت کلیدی خود را بنویسید..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <Button
                      type="submit"
                      style="text-white bg-sky-500 hover:bg-sky-600"
                    >
                      جستجو
                    </Button>
                  </form>
                </div>
              )}
            </div>
          </div>
          {/* Finish Search&Menu Icon */}

          {/* Start NavMenue Modal */}
          <ArticalMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
          {/* Finish NavMenue Modal */}
        </div>

        {/* Start NavLinks */}
        <div className="flex shrink-0 gap-8 text-gray-700 dark:text-gray-50 max-lg:hidden">
          <Link
            className={`font-vazirBold text-base transition-all hover:text-sky-500 ${id === undefined ? 'text-sky-500' : ''}`}
            to="/mag"
          >
            صفحه نخست
          </Link>
          <Link
            className={`font-vazirBold text-base transition-all hover:text-sky-500 ${id === 'travelers' ? 'text-sky-500' : ''}`}
            to="/mag/category/travelers"
          >
            بچه های سفری
          </Link>
          <Link
            className={`font-vazirBold text-base transition-all hover:text-sky-500 ${id === 'wherewhy' ? 'text-sky-500' : ''}`}
            to="/mag/category/wherewhy"
          >
            سفر به کجا؟
          </Link>
          <Link
            className={`font-vazirBold text-base transition-all hover:text-sky-500 ${id === 'knowing' ? 'text-sky-500' : ''}`}
            to="/mag/category/knowing"
          >
            دانستنی ها
          </Link>
          <Link
            className={`font-vazirBold text-base transition-all hover:text-sky-500 ${id === 'news' ? 'text-sky-500' : ''}`}
            to="/mag/category/news"
          >
            جایگاه راپُرت
          </Link>
          <Link
            className={`font-vazirBold text-base transition-all hover:text-sky-500 ${id === 'hosting' ? 'text-sky-500' : ''}`}
            to="/mag/category/hosting"
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
