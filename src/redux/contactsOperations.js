import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAll = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await axios.get('/contacts');

      return contacts.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const addedContact = await axios.post('/contacts', { name, number });
      return addedContact.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async ({ id }, thunkAPI) => {
    try {
      const deletedContact = await axios.delete(`/contacts/${id}`);
      return deletedContact.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
