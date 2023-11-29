import { configureStore } from '@reduxjs/toolkit';
import letter from '../modules/letter';
import member from './../modules/member';

const store = configureStore({
  reducer: { letter, member },
});

export default store;
