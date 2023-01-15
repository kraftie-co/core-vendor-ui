import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    { id: 1, name: 'alabala' },
    { id: 2, name: 'balabala' },
  ],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

const productsActions = productsSlice.actions;

export { productsActions };

export default productsSlice.reducer;
