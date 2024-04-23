import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import DarkMode from '../components/ui/DarkMode';

function AppLayout() {
  return (
    <>
      <DarkMode />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
