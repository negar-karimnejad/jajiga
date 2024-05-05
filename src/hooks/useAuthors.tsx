import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks';
import { AppDispatch } from '../redux/store';
import { getAuthorById, getAuthorsFromServer } from '../redux/store/authors';

const useAuthors = (id?: number) => {
  const dispatch: AppDispatch = useDispatch();
  const data = useAppSelector((state) => state.authors);

  const { authors, author, loading, error } = data;

  useEffect(() => {
    dispatch(getAuthorsFromServer());
    if (id) {
      dispatch(getAuthorById(id));
    }
  }, [dispatch, id]);

  return { authors, author, loading, error };
};

export { useAuthors };
