import { HiOutlineExternalLink } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import ArticleMenuList from './ArticleMenuList';
import ArticlesSocials from './ArticlesSocials';

function ArticalMenu({
  isMenuOpen,
  closeMenu,
}: {
  isMenuOpen: boolean;
  closeMenu: () => void;
}) {
  return (
    <div
      className={`fixed right-0 top-0 h-screen w-full bg-black/60 transition-all duration-500 ${isMenuOpen ? 'visible z-50 opacity-100' : 'invisible z-0 opacity-0'}`}
      onClick={closeMenu}
    >
      <div
        style={{ direction: 'ltr' }}
        onClick={(e) => e.stopPropagation()}
        className={`absolute top-0 z-50 h-screen w-[420px] overflow-y-scroll rounded-s-xl bg-gray-100 pb-10 shadow transition-all duration-500 dark:bg-gray-900 max-[490px]:w-[300px] sm:w-[360px] ${isMenuOpen ? 'right-0' : '-right-[420px]'}`}
      >
        <header className="flex w-full items-center justify-center bg-white py-3 shadow-lg dark:bg-gray-700 dark:shadow-sm dark:shadow-gray-100/50">
          <Button
            style="h-6 w-6 py-0 font-vazirBold text-3xl hover:shadow-none text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            onClick={closeMenu}
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
          <ArticleMenuList />
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
  );
}

export default ArticalMenu;
