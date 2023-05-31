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
      return createdUser.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('users/logOut', async (_, thunkAPI) => {
  try {
    const response = await axios.post('/users/logout');

    token.reset();

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const recoverySession = createAsyncThunk(
  'users/recovery',
  async (_, thunkAPI) => {
    const prevSessionToken = thunkAPI.getState().auth.token;

    if (prevSessionToken === null) {
      return thunkAPI.rejectWithValue();
    } else {
      try {
        token.set(prevSessionToken);
        const prevSessionUser = await axios.get('users/current');
        return prevSessionUser.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);
