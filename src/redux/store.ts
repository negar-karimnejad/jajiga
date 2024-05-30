import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './store/articles';
import authReducer from './store/auth';
import modalReducer from './store/authModal';
import authorsReducer from './store/authors';
import roomsReducer from './store/room';
import roomsMetaReducer from './store/roomsMeta';
import tripsReducer from './store/trips';

export const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    roomsMeta: roomsMetaReducer,
    articles: articlesReducer,
    authors: authorsReducer,
    auth: authReducer,
    modal: modalReducer,
    trips: tripsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
