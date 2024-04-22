import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks';
import { AppDispatch } from '../redux/store';
import { getCategoriesFromServer } from '../redux/store/categories';

const useCategory = (id: number) => {
  const dispatch: AppDispatch = useDispatch();
  const data = useAppSelector((state) => state.categories);
  const { categories, loading, error } = data;
  const category = categories.find((category) => category.id === id);

  useEffect(() => {
    dispatch(getCategoriesFromServer());
  }, [dispatch]);

  return { category, loading, error };
};

export { useCategory };
