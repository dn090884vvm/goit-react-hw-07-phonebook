import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { phonebookReducer } from './phonebookReducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// const rootReducer = combineReducers({ phonebookReducer });

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['phonebookReducer'],
};

const phonebookReducerConfig = {
  key: 'phonebookReducer',
  storage: storage,
  blacklist: ['filter'],
};

const rootReducer = combineReducers({
  phonebookReducer: persistReducer(phonebookReducerConfig, phonebookReducer),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

// const store = configureStore({
//   reducer: {
//     phonebookReducer,
//   },
// });

export default store;
