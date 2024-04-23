import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';

function AppLayout() {
  return (
    <div className='bg-white dark:bg-gray-900'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
