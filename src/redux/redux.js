import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';// Action
export const addBookmark = (quote) => {
    return {
        type: 'ADD_BOOKMARK',
        payload: quote
    };
};

// Initial state
const initialState = {
    bookmarks: []
};

// Reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BOOKMARK':
            return {
                ...state,
                bookmarks: [...state.bookmarks, action.payload]
            };
        default:
            return state;
    }
};

// Store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;