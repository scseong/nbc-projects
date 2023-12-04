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
    setProfile: (state, action) => {
      const { avatar, nickname } = action.payload;
      if (avatar) {
        localStorage.setItem('avatar', avatar);
        state.user.avatar = avatar;
      }
      if (nickname) {
        localStorage.setItem('nickname', nickname);
        state.user.nickname = nickname;
      }
    },
  },
});

export const { login, logout, setProfile } = authSlice.actions;
export default authSlice.reducer;
