import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    bookmarks: JSON.parse(localStorage.getItem('bookmarks')) || [], // get bookmarks from local storage
    loading: false,
};

export const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    addBookmark: (state, action) => {
      state.bookmarks.push(action.payload);
      localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks)); 
    },
    removeBookmark: (state, action) => {
      state.bookmarks.splice(action.payload, 1);
      localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks)); 
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
})

export const { addBookmark, removeBookmark, setLoading } = quoteSlice.actions

export default quoteSlice.reducer