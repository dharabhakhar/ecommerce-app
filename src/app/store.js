import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './counter/counter'
import { wishSlice } from './wishlist/wish'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    wish: wishSlice
  },
})