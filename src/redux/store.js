import { configureStore } from '@reduxjs/toolkit'
import Counter from './Counter'
import ProductData from './ProductData'
export const store = configureStore({
  reducer: {
      Counter: Counter,
      ProductData: ProductData
  },
})