import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks';
import { AppDispatch } from '../redux/store';
import { getHostsFromServer } from '../redux/store/hosts';

function useHosts() {
  const dispatch: AppDispatch = useDispatch();
  const data = useAppSelector((state) => state.hosts);

  const { hosts, loading, error } = data;

  useEffect(() => {
    dispatch(getHostsFromServer());
  }, [dispatch]);

  return { hosts, loading, error };
}

export default useHosts;
