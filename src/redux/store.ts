import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './store/articles';
import authorsReducer from './store/authors';

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    authors: authorsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
