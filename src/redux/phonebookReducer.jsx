import { createReducer } from '@reduxjs/toolkit';
import { filter } from './phonebookActions';

const initialState = {
  filter: '',
};

export const phonebookReducer = createReducer(initialState, {
  [filter]: (state, action) => {
    state.filter = action.payload;
  },
});
