import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './store/articles';
import authorsReducer from './store/authors';
import categoriesReducer from './store/categories';
import authReducer from './store/auth';
import modalReducer from './store/authModal';

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    authors: authorsReducer,
    categories: categoriesReducer,
    auth: authReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
