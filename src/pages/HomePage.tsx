import { useEffect, useState } from 'react';
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

function HomePage() {
  const [scrollYPosition, setScrollYPosition] = useState(0);

  const handleScroll = () => {
    const newScrollYPosition = window.pageYOffset;
    setScrollYPosition(newScrollYPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {scrollYPosition > 470 && <Navbar />}
      <div className="container navbar fixed left-0 right-0 top-0 z-40 mx-auto">
        <div className="flex-1 gap-10">
          <div className="cursor-pointer rounded-full bg-gray-300/50 px-2">
            <NavMenu />
          </div>
          <div className="flex shrink-0 gap-8 text-gray-50 max-md:hidden">
            <NavLinks />
          </div>
        </div>
        {scrollYPosition < 470 && <Logo withTitle={true} />}
      </div>
      <Hero />
      <div className=" bg-white dark:bg-gray-900">
        <Application style="absolute -top-10 right-0 h-14 rounded-t-2xl" />
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
      </div>
    </>
  );
}

export default HomePage;
