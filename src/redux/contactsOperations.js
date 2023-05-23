import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAll = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await axios.get('/contacts');

      console.log(contacts.data);
      return contacts.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const addedContact = await axios.post('/contacts', { name, number });
      console.log(addedContact);
      return addedContact.data;
    } catch (error) {}
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async ({ id }, thunkAPI) => {
    try {
      const deletedContact = await axios.delete('/contacts', { id });
      console.log(deletedContact.data);
      return deleteContact.data;
    } catch (error) {}
  }
);
