import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    avatar: localStorage.getItem('avatar'),
    nickname: localStorage.getItem('nickname'),
    userId: localStorage.getItem('userId'),
    accessToken: localStorage.getItem('accessToken'),
  },
  isAuthenticated: localStorage.getItem('accessToken') ? true : false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { avatar, nickname, userId, accessToken } = action.payload;
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem('avatar', avatar ?? '');
      localStorage.setItem('nickname', nickname);
      localStorage.setItem('userId', userId);
      localStorage.setItem('accessToken', accessToken);
    },
    logout: (state) => {
      localStorage.clear();
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
