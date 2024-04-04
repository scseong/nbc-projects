import { configureStore } from '@reduxjs/toolkit';
import letters from '../modules/letterSlice';
import member from '../modules/memberSlice';
import auth from '../modules/authSlice';

const store = configureStore({
  reducer: { letters, member, auth },
});

export default store;
