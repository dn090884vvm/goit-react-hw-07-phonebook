import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from './phonebookReducer';

import { contactsApi } from './contactsSliser';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const store = configureStore({
  reducer: { phonebookReducer, [contactsApi.reducerPath]: contactsApi.reducer },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

setupListeners(store.dispatch);
export default store;
