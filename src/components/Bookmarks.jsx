import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // import useDispatch
import { removeBookmark } from '../redux/quoteSlice'; // import removeBookmark action
import '../styles/Bookmarks.css';

const Bookmarks = () => {
    const bookmarks = useSelector(state => state.quote.bookmarks);
    const dispatch = useDispatch(); // create a dispatch function

    const handleRemove = (index) => { // create a remove handler
        dispatch(removeBookmark(index)); // dispatch the removeBookmark action with the index as its payload
    }

    return ( 
        <div className='bookmarksComponent'>
            {bookmarks.length === 0 ? (
                <p>No bookmarks added</p> 
            ) : (
                bookmarks.map((bookmark, index) => (
                    <div className='quoteContainer' key={index}>
                        <div className="text">
                            <h3>{bookmark.content}</h3>
                            <div className='bottomDiv'>
                                <p>{bookmark.author}</p>
                                <button className='removeBtn'onClick={() => handleRemove(index)}>Remove</button> {/* add a remove button */}

                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
     );
}
 
export default Bookmarks;