import { configureStore } from '@reduxjs/toolkit';
import letter from '../modules/letter';
import member from '../modules/member';
import auth from '../modules/auth';

const store = configureStore({
  reducer: { letter, member, auth },
});

export default store;
