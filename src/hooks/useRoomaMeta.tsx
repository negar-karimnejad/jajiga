import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks';
import { AppDispatch } from '../redux/store';
import { getRoomsMetaFromServer } from '../redux/store/roomsMeta';

function useRoomsMeta() {
  const dispatch: AppDispatch = useDispatch();
  const data = useAppSelector((state) => state.roomsMeta);
  const { error, loading, roomsMeta } = data;

  useEffect(() => {
    dispatch(getRoomsMetaFromServer());
  }, [dispatch]);

  return { error, loading, roomsMeta };
}

export default useRoomsMeta;
