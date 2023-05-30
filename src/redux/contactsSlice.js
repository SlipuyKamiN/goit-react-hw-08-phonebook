import { createSlice } from '@reduxjs/toolkit';
import { fetchAll, addContact, deleteContact } from './contactsOperations';
import { STATUS } from 'redux/constants';
const { IDLE, PENDING, FULFILLED, REJECTED } = STATUS;

const initialState = { contacts: [], status: IDLE };

const handlePending = state => {
  state.status = PENDING;
};
const handleRejected = state => {
  state.status = REJECTED;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchAll.pending](state) {
      handlePending(state);
    },
    [fetchAll.rejected](state) {
      handleRejected(state);
    },
    [addContact.pending](state) {
      handlePending(state);
    },
    [addContact.rejected](state) {
      handleRejected(state);
    },
    [deleteContact.pending](state) {
      handlePending(state);
    },
    [deleteContact.rejected](state) {
      handleRejected(state);
    },
    [fetchAll.fulfilled](state, action) {
      state.contacts = [...action.payload];
      state.status = FULFILLED;
    },
    [addContact.fulfilled](state, action) {
      state.contacts = [...state.contacts, action.payload];
      state.status = FULFILLED;
    },
    [deleteContact.fulfilled](state, action) {
      state.contacts = state.contacts.filter(
        ({ id }) => id !== action.payload.id
      );
      state.status = FULFILLED;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
