import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
};

const login = createAsyncThunk('user/login', async (payload) => {
  const response = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  return data;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = {};
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
  },
});

const userActions = { ...userSlice.actions, login };

export { userActions };

export default userSlice.reducer;
