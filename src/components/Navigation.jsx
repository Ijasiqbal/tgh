import { useState } from "react";
import { useSelector } from "react-redux"; // import useSelector
import { Link, useLocation } from "react-router-dom";
import Home from "./Home";
import Bookmarks from "./Bookmarks";
import ReactLoading from 'react-loading';

const Navigation = () => {
    const [homePage, setHomePage] = useState(true);
    const [bookmarksPage, setBookmarksPage] = useState(false);

    const loading = useSelector(state => state.quote.loading); // access the loading state

    return ( 
        <div className="navigatePage">
            <div className="tab">
                <button className={homePage && 'selected'} onClick={
                    () => {
                        setHomePage(true)
                        setBookmarksPage(false)
                    }
                }>Home</button>
                <button className={bookmarksPage && 'selected'} onClick={
                    () => {
                        setHomePage(false)
                        setBookmarksPage(true)
                    }
                }>Bookmarks</button>
            </div>
            <div className="content">
                {loading ? (
                  <div className='loading-overlay'>
                    <ReactLoading type={"spokes"} color={'#000000'} height={'20%'} width={'20%'}/>
                  </div>
                ) : null}  
                {homePage && <Home />}
                {bookmarksPage && <Bookmarks />}
            </div>
        </div>
    );
}
 
export default Navigation;