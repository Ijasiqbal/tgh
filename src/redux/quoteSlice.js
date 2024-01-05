import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    bookmarks: []
};

export const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    addBookmark: (state, action) => {
      // Add the new bookmark to the state
      state.bookmarks.push(action.payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { addBookmark } = quoteSlice.actions

export default quoteSlice.reducer