import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchForums = createAsyncThunk(
  'forum/fetchForums',
  async () => {
    const response = await fetch('/api/forums');
    if (!response.ok) {
      throw new Error('Failed to fetch forums');
    }
    const data = await response.json();
    return data;
  }
);

const forumSlice = createSlice({
  name: 'forum',
  initialState: {
    forums: [],
    error: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchForums.pending, state => {
        state.error = null;
      })
      .addCase(fetchForums.fulfilled, (state, action) => {
        state.forums = action.payload;
        state.error = null;
      })
      .addCase(fetchForums.rejected, (state, action) => {
        state.error = action.error.message;
      });
  }
});

export default forumSlice.reducer;