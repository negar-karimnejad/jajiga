import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks';
import { AppDispatch } from '../redux/store';
import {
  getCategoriesFromServer
} from '../redux/store/categories';

const useCategories = () => {
  const dispatch: AppDispatch = useDispatch();
  const data = useAppSelector((state) => state.categories);
  const { categories, loading, error } = data;

  useEffect(() => {
    dispatch(getCategoriesFromServer());
  }, [dispatch]);

  return { categories, loading, error };
};

export { useCategories };

