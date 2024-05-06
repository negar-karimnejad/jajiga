import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks';
import { AppDispatch } from '../redux/store';
import { getArticlesFromServer } from '../redux/store/articles';

const useArticles = () => {
  const dispatch: AppDispatch = useDispatch();
  const data = useAppSelector((state) => state.articles);

  const { articles, loading, error } = data;

  useEffect(() => {
    dispatch(getArticlesFromServer());
  }, [dispatch]);

  // Mapping object to hold filtered articles for each category
  const categoryArticles = {
    wherewhy: articles.filter((article) => article.category_id === 1),
    hosting: articles.filter((article) => article.category_id === 2),
    travelers: articles.filter((article) => article.category_id === 3),
    knowing: articles.filter((article) => article.category_id === 4),
    news: articles.filter((article) => article.category_id === 5),
  };

  return {
    articles,
    loading,
    error,
    ...categoryArticles,
  };
};

export { useArticles };
