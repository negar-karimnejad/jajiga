import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default AppLayout;
