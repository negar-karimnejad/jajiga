import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { getArticlesFromServer } from '../redux/store/articles';
import { AnyAction } from 'redux';
import { ThunkDispatch } from '@reduxjs/toolkit';

function Articles() {
  const articles = useSelector((state: RootState) => state.articles);
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  useEffect(() => {
    dispatch(getArticlesFromServer()); // Explicitly cast to any to resolve type mismatch
  }, [dispatch]);

  console.log(articles);

  return <div>Articles</div>;
}

export default Articles;
