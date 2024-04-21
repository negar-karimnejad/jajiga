import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks';
import { getArticlesFromServer } from '../redux/store/articles';
import { AppDispatch } from '../redux/store';

function Articles() {
  const dispatch: AppDispatch = useDispatch();
  const articles = useAppSelector((state) => state.articles);

  useEffect(() => {
    dispatch(getArticlesFromServer());
  }, [dispatch]);

  console.log(articles);

  return <div>Articles</div>;
}

export default Articles;
