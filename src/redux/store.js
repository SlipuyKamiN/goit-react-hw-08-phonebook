import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { contactsApi } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { userReducer } from './authSlice';
import { contacsReducer } from './contactsSlice';
// import { authApi } from './authSlice';

// console.log(authApi.reducer);

const rootReducer = combineReducers({
  // [contactsApi.reducerPath]: contactsApi.reducer,
  // [authApi.reducerPath]: authApi.reducer,
  user: userReducer,
  contacts: contacsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware().concat(authApi.middleware),
});
