import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks';
import { AppDispatch } from '../redux/store';
import { getAuthorsFromServer } from '../redux/store/authors';

const useAuthors = () => {
  const dispatch: AppDispatch = useDispatch();
  const data = useAppSelector((state) => state.authors);

  const { authors, loading, error } = data;

  useEffect(() => {
    dispatch(getAuthorsFromServer());
  }, [dispatch]);

  return { authors, loading, error };
};

export { useAuthors };
