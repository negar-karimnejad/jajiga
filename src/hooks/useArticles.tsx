import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks';
import { AppDispatch } from '../redux/store';
import {
  Article,
  getArticleById,
  getArticlesFromServer,
} from '../redux/store/articles';

interface ArticlesData {
  articles: Article[];
  article: Article | null;
  loading: boolean;
  error: string | null;
  wherewhy: Article[];
  hosting: Article[];
  travelers: Article[];
  knowing: Article[];
  news: Article[];
}

const useArticles = (title?: string): ArticlesData => {
  const dispatch: AppDispatch = useDispatch();
  const data = useAppSelector((state) => state.articles);

  const { articles, loading, error, article } = data;

  useEffect(() => {
    dispatch(getArticlesFromServer());
    if (title) {
      dispatch(getArticleById(title));
    }
  }, [dispatch, title]);

  const wherewhy = articles.filter((article) => article.category_id === 1);
  const hosting = articles.filter((article) => article.category_id === 2);
  const travelers = articles.filter((article) => article.category_id === 3);
  const knowing = articles.filter((article) => article.category_id === 4);
  const news = articles.filter((article) => article.category_id === 5);

  return {
    articles,
    article,
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
