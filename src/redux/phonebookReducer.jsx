import { createReducer } from '@reduxjs/toolkit';
import { filter, addContact } from './phonebookActions';

const initialState = {
  contacts: [],
  filter: '',
};

export const phonebookReducer = createReducer(initialState, {
  [addContact]: (state, action) => {
    // state.contacts.push(action.payload);
    return { ...state, contacts: [...state.contacts, action.payload] };

    //  const newContacts = [...state.contacts, action.payload];
    // return { ...state, contacts: newContacts };
  },
  [filter]: (state, action) => {
    state.filter = action.payload;
  },
});
