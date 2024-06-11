import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks';
import { AppDispatch } from '../redux/store';
import {
  Room,
  addRoomToServer,
  getRoomsFromServer,
  removeRoomFromServer,
} from '../redux/store/room';

function useRooms() {
  const dispatch: AppDispatch = useDispatch();
  const data = useAppSelector((state) => state.rooms);
  const { error, loading, rooms } = data;

  const addRoom = (roomData: Room) => {
    dispatch(addRoomToServer(roomData));
  };

  const removeRoom = (roomId: number) => {
    dispatch(removeRoomFromServer(roomId));
  };

  useEffect(() => {
    dispatch(getRoomsFromServer());
  }, [dispatch]);

  return { error, loading, rooms, addRoom, removeRoom };
}

export default useRooms;
