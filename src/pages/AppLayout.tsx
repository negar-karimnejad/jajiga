import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import DarkMode from '../components/ui/DarkMode';
import MobileNavigationMenu from '../components/ui/MobileNavigationMenu ';

function AppLayout() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <DarkMode />
      <MobileNavigationMenu />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
