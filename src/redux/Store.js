import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './CartSlice';
import ProductReducer from './ProductSlice';

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    products: ProductReducer
  },
})