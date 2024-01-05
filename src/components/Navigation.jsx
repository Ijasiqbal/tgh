import { useState } from "react";
import { Link, useLocation} from "react-router-dom";
import Home from "./Home";
import Bookmarks from "./Bookmarks";


const Navigation = () => {
    const [homePage, setHomePage] = useState(true);
    const [bookmarksPage, setBookmarksPage] = useState(false);


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
                {homePage && <Home />}
                {bookmarksPage && <Bookmarks />}
            </div>
        </div>
        
     );
}
 
export default Navigation;