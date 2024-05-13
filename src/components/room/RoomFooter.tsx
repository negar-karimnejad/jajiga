import { useParams } from 'react-router-dom';
import useRoom from '../../hooks/useRoom';
import useRooms from '../../hooks/useRooms';
import SliderSection from '../ui/SliderSection';

function RoomFooter() {
  const { id } = useParams();

  const { room } = useRoom(Number(id));
  const { rooms } = useRooms();

  if (!room || !rooms) return null;

  const similarRooms = rooms.filter(
    (item) => item.category[1] === room.category[1],
  );

  return (
    <div className="mb-10">
      <SliderSection
        list={similarRooms}
        title={`سایر اقامتگاه های ${room.category[1]}`}
        nextBtn="economic-swiper-button-next"
        prevBtn="economic-swiper-button-prev"
      />
    </div>
  );
}

export default RoomFooter;
