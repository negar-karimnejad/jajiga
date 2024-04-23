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
  const wherewhy = articles.filter((article) => article.category_id === 1);
  const hosting = articles.filter((article) => article.category_id === 2);
  const travelers = articles.filter((article) => article.category_id === 3);
  const knowing = articles.filter((article) => article.category_id === 4);
  const news = articles.filter((article) => article.category_id === 5);

  return {
    articles,
    loading,
    error,
    wherewhy,
    news,
    knowing,
    travelers,
    hosting,
  };
};

export { useArticles };
