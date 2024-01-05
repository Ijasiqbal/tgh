import { configureStore } from '@reduxjs/toolkit'
import quoteReducer from './quoteSlice'; // import the reducer

const store = configureStore({
  reducer: {
    quote: quoteReducer, // add the reducer
  },
})

export default store; 