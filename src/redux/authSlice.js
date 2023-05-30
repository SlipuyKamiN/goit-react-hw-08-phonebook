import { createSlice } from '@reduxjs/toolkit';
import {
  createNewUser,
  logIn,
  logOut,
  recoverySession,
} from './authOperations';
import { STATUS } from 'redux/constants';
const { IDLE, PENDING, FULFILLED, REJECTED } = STATUS;

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
  status: IDLE,
};

const handlePending = state => {
  state.status = PENDING;
};
const handleRejected = state => {
  state.status = REJECTED;
};
const handleFulfilled = (state, action) => {
  state.user.name = action.payload.user.name;
  state.user.email = action.payload.user.email;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.status = FULFILLED;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [createNewUser.pending](state) {
      handlePending(state);
    },
    [createNewUser.rejected](state) {
      handleRejected(state);
    },
    [createNewUser.fulfilled](state, action) {
      handleFulfilled(state, action);
    },
    [logIn.pending](state) {
      handlePending(state);
    },
    [logIn.rejected](state) {
      handleRejected(state);
    },
    [logIn.fulfilled](state, action) {
      handleFulfilled(state, action);
    },
    [logOut.pending](state) {
      handlePending(state);
    },
    [logOut.rejected](state) {
      handleRejected(state);
    },

    [logOut.fulfilled](state) {
      state.user.name = initialState.user.name;
      state.user.email = initialState.user.email;
      state.token = initialState.token;
      state.isLoggedIn = false;
    },
    [recoverySession.pending](state) {
      state.status = IDLE;
    },
    [recoverySession.fulfilled](state, action) {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.isLoggedIn = true;
      state.status = FULFILLED;
    },
    [recoverySession.rejected](state) {
      handleRejected(state);
      state.isLoggedIn = false;
    },
  },
});

export const authReducer = authSlice.reducer;
