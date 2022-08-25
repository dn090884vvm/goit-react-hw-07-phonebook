import { createAction } from '@reduxjs/toolkit';

export const filter = createAction('phonebookReducer/filter');
export const addContact = createAction('phonebookReducer/addContact');
export const deleteContact = createAction('phonebookReducer/deleteContact');
