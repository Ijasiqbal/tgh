import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/Bookmarks.css';

const Bookmarks = () => {
    const bookmarks = useSelector(state => state.quote.bookmarks);

    return ( 
        <div className='bookmarksComponent'>
            {bookmarks.map((bookmark, index) => (
                <div className='quoteContainer' key={index}>
                    <div className="text">
                        <h3>{bookmark.content}</h3>
                        <p>{bookmark.author}</p>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default Bookmarks;