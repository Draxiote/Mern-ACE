import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
};
const initialState2 = {
  forumInfo: localStorage.getItem('forumInfo')
    ? JSON.parse(localStorage.getItem('forumInfo'))
    : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  initialState2,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));

      
      state.forumInfo = action.payload;
      localStorage.setItem('forumInfo', JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
