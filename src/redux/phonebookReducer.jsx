import { createReducer } from '@reduxjs/toolkit';
import { filter, addContact, deleteContact } from './phonebookActions';

const initialState = {
  contacts: [],
  filter: '',
};

export const phonebookReducer = createReducer(initialState, {
  [addContact]: (state, action) => {
    state.contacts.push(action.payload);
    // window.localStorage.setItem('contacts', JSON.stringify(state.contacts));
  }, //or concat instead push without {} brackets
  //   [addContact]: (state, action) => [...state, action.payload],

  [deleteContact]: (state, action) => {
    const newContacts = state.contacts.filter(
      item => item.id !== action.payload
    );
    // localStorage.setItem('contacts', JSON.stringify(newContacts));
    return { ...state, contacts: newContacts };
  },

  [filter]: (state, action) => {
    state.filter = action.payload;
  },
});
