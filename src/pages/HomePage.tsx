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

function HomePage() {
  return (
    <>
      <Hero />
      <div className=" bg-white dark:bg-gray-900">
        <Application />
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
