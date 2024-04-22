import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { useAppSelector } from '../hooks';
import { useEffect } from 'react';
import { getAuthorsFromServer } from '../redux/store/authors';

const useAthors = () => {
  const dispatch: AppDispatch = useDispatch();
  const data = useAppSelector((state) => state.authors);

  const { authors, loading, error } = data;

  useEffect(() => {
    dispatch(getAuthorsFromServer());
  }, [dispatch]);

  return { authors, loading, error };
};

export { useAthors };
