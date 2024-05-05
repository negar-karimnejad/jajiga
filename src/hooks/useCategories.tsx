import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks';
import { AppDispatch } from '../redux/store';
import {
  getCategoriesFromServer,
  getCategoryById,
} from '../redux/store/categories';

const useCategories = (id?: number) => {
  const dispatch: AppDispatch = useDispatch();
  const data = useAppSelector((state) => state.categories);
  const { categories, loading, error, category } = data;

  useEffect(() => {
    dispatch(getCategoriesFromServer());
    if (id) {
      dispatch(getCategoryById(id));
    }
  }, [dispatch, id]);

  return { categories, loading, error, category };
};

export { useCategories };

