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
import { contactsApi } from './contactsSliser';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

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
  [contactsApi.reducerPath]: contactsApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,
  ],
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
export default store;