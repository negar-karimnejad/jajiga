import { combineReducers, configureStore } from '@reduxjs/toolkit';
import articlesReducer from './store/articles';

const rootReducer = combineReducers({
  articles: articlesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
