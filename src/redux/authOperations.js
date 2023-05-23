import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  reset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const createNewUser = createAsyncThunk(
  'users/createUser',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const createdUser = await axios.post('/users/signup', {
        name,
        email,
        password,
      });

      token.set(createdUser.data.token);
      console.log(createdUser);
      return createdUser.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const logIn = createAsyncThunk(
  'users/logIn',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', {
        email,
        password,
      });

      token.set(response.data.token);

      return response.data;
    } catch (error) {}
  }
);

export const logOut = createAsyncThunk('users/logOut', async (_, thunkAPI) => {
  try {
    const response = await axios.post('/users/logout');

    token.reset();

    return response.data;
  } catch (error) {}
});
