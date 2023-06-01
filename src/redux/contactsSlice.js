import { createSlice } from '@reduxjs/toolkit';
import { fetchAll, addContact, deleteContact } from './contactsOperations';
import { STATUS } from 'redux/constants';
const { IDLE, PENDING, FULFILLED, REJECTED } = STATUS;

const initialState = {
  contacts: [],
  status: IDLE,
  operation: null,
  error: null,
};

const handlePending = state => {
  state.status = PENDING;
  state.error = null;
};
const handleRejected = (state, action) => {
  state.status = REJECTED;
  state.operation = null;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchAll.pending](state) {
      handlePending(state);
      state.operation = 'fetchAll';
    },
    [fetchAll.rejected](state, action) {
      handleRejected(state, action);
    },
    [addContact.pending](state) {
      handlePending(state);
      state.operation = 'addContact';
    },
    [addContact.rejected](state, action) {
      handleRejected(state, action);
    },
    [deleteContact.pending](state, action) {
      handlePending(state);
      state.operation = `${action.meta.arg.id}`;
    },
    [deleteContact.rejected](state, action) {
      handleRejected(state, action);
    },
    [fetchAll.fulfilled](state, action) {
      state.contacts = [...action.payload];
      state.status = FULFILLED;
      state.operation = null;
      state.error = null;
    },
    [addContact.fulfilled](state, action) {
      state.contacts = [...state.contacts, action.payload];
      state.status = FULFILLED;
      state.operation = null;
      state.error = null;
    },
    [deleteContact.fulfilled](state, action) {
      state.contacts = state.contacts.filter(
        ({ id }) => id !== action.payload.id
      );
      state.status = FULFILLED;
      state.operation = null;
      state.error = null;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
