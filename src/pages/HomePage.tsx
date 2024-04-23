import Advantages from '../components/home/Advantages';
import Application from '../components/home/Application';
import Hero from '../components/home/Hero';
import Popular from '../components/home/Popular';
import QuickSearch from '../components/home/QuickSearch';

function HomePage() {
  return (
    <>
      <Hero />
      <Application />
      <Popular />
      <QuickSearch />
      <Advantages />
    </>
  );
}

export default HomePage;
