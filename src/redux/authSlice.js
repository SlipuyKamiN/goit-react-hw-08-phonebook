import { createSlice } from '@reduxjs/toolkit';
import { createNewUser, logIn, logOut } from './authOperations';

const initialState = { name: '', email: '', token: null, isLoggedIn: false };

const authSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [createNewUser.fulfilled](state, action) {
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.name = initialState.name;
      state.email = initialState.email;
      state.token = initialState.token;
      state.isLoggedIn = false;
    },
  },
});

export const userReducer = authSlice.reducer;

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const authApi = createApi({
//   reducerPath: 'authApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://connections-api.herokuapp.com/',
//   }),
//   tagTypes: ['Users'],
//   endpoints: builder => ({
//     createNewUser: builder.mutation({
//       query: ({ name, email, password }) => ({
//         url: '/users/signup',
//         method: 'POST',
//         body: { name, email, password },
//       }),

//       providesTags: ['Users'],
//     }),
//     logIn: builder.mutation({
//       query: ({ email, password }) => ({
//         url: '/users/login',
//         method: 'POST',
//         body: { email, password },
//       }),

//       providesTags: ['Users'],
//     }),
//     logOut: builder.mutation({
//       query: () => ({
//         url: '/users/logout',
//         method: 'POST',
//         body: {},
//       }),
//       providesTags: ['Users'],
//     }),
//   }),
// });

// export const { useCreateNewUserMutation, useLogInMutation, useLogOutMutation } =
//   authApi;
