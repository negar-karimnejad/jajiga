import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { useAppSelector } from '../hooks';
import { useEffect } from 'react';
import { getArticlesFromServer } from '../redux/store/articles';

const useArticles = () => {
  const dispatch: AppDispatch = useDispatch();
  const data = useAppSelector((state) => state.articles);
  
  const { articles, loading, error } = data;

  useEffect(() => {
    dispatch(getArticlesFromServer());
  }, [dispatch]);

  return { articles, loading, error };
};

export { useArticles };
