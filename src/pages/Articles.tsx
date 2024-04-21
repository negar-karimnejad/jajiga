import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ArticlesHeader from '../components/articles/ArticlesHeader';
import { useAppSelector } from '../hooks';
import { AppDispatch } from '../redux/store';
import { getArticlesFromServer } from '../redux/store/articles';

function Articles() {
  const dispatch: AppDispatch = useDispatch();
  const articles = useAppSelector((state) => state.articles);

  useEffect(() => {
    dispatch(getArticlesFromServer());
  }, [dispatch]);

  console.log(articles);

  return (
    <>
      <ArticlesHeader />
    </>
  );
}

export default Articles;
