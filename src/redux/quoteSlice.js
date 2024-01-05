import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    bookmarks: [],
    loading: false,
};

export const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    addBookmark: (state, action) => {
      state.bookmarks.push(action.payload);
    },
    removeBookmark: (state, action) => { // add this reducer
      state.bookmarks.splice(action.payload, 1);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
})

export const { addBookmark, removeBookmark, setLoading } = quoteSlice.actions // export the new action

export default quoteSlice.reducer