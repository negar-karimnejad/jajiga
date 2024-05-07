import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks';
import { AppDispatch } from '../redux/store';
import { getRoomsFromServer } from '../redux/store/room';

function useRooms() {
  const dispatch: AppDispatch = useDispatch();
  const data = useAppSelector((state) => state.rooms);
  const { error, loading, rooms } = data;

  useEffect(() => {
    dispatch(getRoomsFromServer());
  }, [dispatch]);

  return { error, loading, rooms };
}

export default useRooms;
