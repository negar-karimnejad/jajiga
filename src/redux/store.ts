import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './store/articles';
import authReducer from './store/auth';
import modalReducer from './store/authModal';
import authorsReducer from './store/authors';
import categoriesReducer from './store/categories';
import hostsReducer from './store/hosts';
import roomsReducer from './store/room';

export const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    hosts: hostsReducer,
    articles: articlesReducer,
    authors: authorsReducer,
    categories: categoriesReducer,
    auth: authReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
