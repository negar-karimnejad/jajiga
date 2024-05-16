import { ChangeEvent, useEffect, useState } from 'react';
import Footer from '../components/footer/Footer';
import Advantages from '../components/home/Advantages';
import Application from '../components/home/Application';
import Comments from '../components/home/Comments';
import Discount from '../components/home/Discount';
import Economic from '../components/home/Economic';
import Hero from '../components/home/Hero';
import Host from '../components/home/Host';
import InstantBooking from '../components/home/InstantBooking';
import JajigaMag from '../components/home/JajigaMag';
import Junub from '../components/home/Junub';
import Luxury from '../components/home/Luxury';
import MoreInfos from '../components/home/MoreInfos';
import Popular from '../components/home/Popular';
import Premium from '../components/home/Premium';
import QuickSearch from '../components/home/QuickSearch';
import Shomal from '../components/home/Shomal';
import Specials from '../components/home/Specials';
import SuburbTehran from '../components/home/SuburbTehran';
import Logo from '../components/navbar/Logo';
import NavLinks from '../components/navbar/NavLinks';
import NavMenu from '../components/navbar/NavMenu';
import Navbar from '../components/navbar/Navbar';
import SearchResultModal from '../components/ui/SearchResultModal';
import { useScroll } from '../hooks/useScroll';
import useSearch from '../hooks/useSearch';

function HomePage() {
  const { scrollYPosition } = useScroll();
  const [search, setSearch] = useState<string>('');

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const { searchResult, setSearch: setSearchQuery } = useSearch();

  useEffect(() => {
    setSearchQuery(search);
  }, [setSearchQuery, search]);

  return (
    <>
      <Navbar scrollYPosition={scrollYPosition} />
      <div className="container navbar fixed left-0 right-0 top-0 z-30 mx-auto">
        <div className="flex-1 gap-10">
          <div className="cursor-pointer rounded-full bg-gray-300/50 px-2">
            <NavMenu />
          </div>
          <div className="flex shrink-0 gap-8 text-white max-md:hidden">
            <NavLinks />
          </div>
        </div>
        {scrollYPosition < 350 && <Logo withTitle={true} />}
      </div>
      <Hero />
      <div className="relative bg-white dark:bg-gray-900">
        <Application style="absolute -top-12 right-0 h-14 rounded-t-2xl" />
        <Popular />
        <QuickSearch />
        <Advantages />
        <Premium />
        <Specials />
        <InstantBooking />
        <Discount />
        <Luxury />
        <Economic />
        <Host />
        <Shomal />
        <SuburbTehran />
        <Junub />
        <Comments />
        <JajigaMag />
        <MoreInfos />
        <Footer />
      </div>
      <div className="absolute left-0 right-0 top-40 z-20 mx-auto w-96">
        <div className="relative">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col items-center justify-center gap-4"
          >
            <label htmlFor="" className="font-vazirMedium text-lg text-white">
              اجاره ویلا در شمال و سراسر ایران زیبا
            </label>
            <div className="input input-bordered flex w-96 items-center gap-2 rounded-full pl-1 max-sm:w-72">
              <input
                type="text"
                className="grow text-gray-700 dark:text-white"
                placeholder="میخوای کجا بری؟"
                value={search}
                onChange={changeHandler}
              />
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-8 w-8 rounded-full bg-yellow-400 p-1 text-gray-800 transition-all hover:bg-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </form>
          <SearchResultModal searchResult={searchResult} />
          <div className="absolute left-0 right-0 top-20 -z-10 mx-auto h-fit w-full text-white ">
            <div className="mt-10 text-center text-white">
              <p className="font-vazirMedium text-2xl md:text-3xl">
                جاجیــــــــــگا
              </p>
              <p className="mt-3 font-vazirMedium text-sm md:text-base">
                مثل خونه خودته :)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
