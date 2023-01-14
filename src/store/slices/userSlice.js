import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as userApi from '../../services/api/user';

const initialState = {
  connectedUser: {
    userId: 1,
  },
};

const login = createAsyncThunk('user/login', async (payload) => {
  const { data } = await userApi.login(payload.email, payload.password);

  return data;
});

const register = createAsyncThunk('user/register', async (payload) => {
  const { data } = await userApi.register(payload.email, payload.password);

  return data;
});

const getUserDetails = createAsyncThunk('user/getUserDetails', async (payload) => {
  const { data } = await userApi.getUserDetails(payload.userId);

  return data;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.connectedUser = {};
    },
  },

  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      localStorage.setItem('token', action.payload.token);
    });

    builder.addCase(register.fulfilled, (state, action) => {
      localStorage.setItem('token', action.payload.token);
    });

    builder.addCase(getUserDetails.fulfilled, (state, action) => {
      state.connectedUser = action.payload;
    });
  },
});

const userActions = { ...userSlice.actions, login, register, getUserDetails };

export { userActions };

export default userSlice.reducer;
