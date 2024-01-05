import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { connect } from 'react-redux';
import { addBookmark, setLoading } from '../redux/quoteSlice'; // import setLoading
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = (props) => {
    const [quote, setQuote] = useState("");
    const [tags, setTags] = useState([]);
    const [selectedTag, setSelectedTag] = useState("");

    const notify = () => toast("Bookmark added");

    useEffect(() => {
        getQuote();
        getTags();
    }, []);

    async function getQuote() {
        try {
            props.setLoading(true); // set loading to true before the request
            let apiUrl = 'https://api.quotable.io/random';
    
            if (selectedTag) {
                apiUrl += `?tags=${selectedTag}`;
            }
    
            const response = await axios.get(apiUrl);
            const newQuote = response.data;
            setQuote(newQuote);
        } catch (error) {
            console.error('Error fetching quote:', error);
        } finally {
            props.setLoading(false); // set loading to false after the request
        }
    }

    async function getTags() {
        try {
            props.setLoading(true); // set loading to true before the request
            const response = await axios.get('https://api.quotable.io/tags');
            const newTags = response.data;
            setTags(newTags);
        } catch (error) {
            console.error('Error fetching tags:', error);
        } finally {
            props.setLoading(false); // set loading to false after the request
        }
    }

    const handleTagChange = (event) => {
        setSelectedTag(event.target.value);
    };

    const handleBookmarkClick = () => {
        notify();
        props.addBookmark(quote);
    };

    return ( 
        <div className="home">
            <ToastContainer 
            autoClose={1000}
            theme="colored"
            />
            <div className="quoteContainer">
                <div className="text">
                    <h3>{quote.content}</h3>
                    <div className='bottomDiv'>
                        <p>{quote.author}</p>
                        <div className="icon" onClick={handleBookmarkClick}><FontAwesomeIcon icon={faBookmark} /></div>
                    </div>
                </div>
            </div>
            <div className='select'>
                <select name="options" value={selectedTag} onChange={handleTagChange}>
                    <option value="">Select a tag</option>
                    {tags.map((tag) => (
                        <option key={tag.name} value={tag.name}>
                            {tag.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="greenBtn">
                <button onClick={getQuote}>Next Quote</button>
            </div>
        </div>
    );
}

const mapDispatchToProps = {
    addBookmark,
    setLoading // add setLoading to mapDispatchToProps
};

export default connect(null, mapDispatchToProps)(Home);