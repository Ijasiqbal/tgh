import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    bookmarks: [],
    loading: false, // add this line
};

export const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    addBookmark: (state, action) => {
      state.bookmarks.push(action.payload);
    },
    setLoading: (state, action) => { // add this reducer
      state.loading = action.payload;
    },
  },
})

export const { addBookmark, setLoading } = quoteSlice.actions // export the new action

export default quoteSlice.reducer