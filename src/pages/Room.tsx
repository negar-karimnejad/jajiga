import Footer from '../components/footer/Footer';
import WhiteBgNavbar from '../components/navbar/WhiteBgNavbar';
import RoomFooter from '../components/room/RoomFooter';
import RoomHeader from '../components/room/RoomHeader';
import RoomMain from '../components/room/room-main/RoomMain';

function Room() {
  return (
    <div>
      <div className="mx-auto w-full border-b bg-white py-2 dark:border-0 dark:bg-gray-800 lg:gap-x-10">
        <div className="container flex items-center justify-between gap-x-3">
          <WhiteBgNavbar />
        </div>
      </div>
      <RoomHeader />
      <RoomMain />
      <RoomFooter />
      <Footer/>
    </div>
  );
}

export default Room;
