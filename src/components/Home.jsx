import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { connect } from 'react-redux';
import { addBookmark } from '../redux/quoteSlice';

const Home = (props) => {
    const [quote, setQuote] = useState("");
    const [tags, setTags] = useState([]);
    const [selectedTag, setSelectedTag] = useState("");

    useEffect(() => {
        getQuote();
        getTags();
    }, []);

    async function getQuote() {
        try {
            let apiUrl = 'https://api.quotable.io/random';
    
            if (selectedTag) {
                apiUrl += `?tags=${selectedTag}`;
            }
    
            const response = await axios.get(apiUrl);
            const newQuote = response.data;
            setQuote(newQuote);
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    }

    async function getTags() {
        try {
            const response = await axios.get('https://api.quotable.io/tags');
            const newTags = response.data;
            setTags(newTags);
        } catch (error) {
            console.error('Error fetching tags:', error);
        }
    }

    const handleTagChange = (event) => {
        setSelectedTag(event.target.value);
    };

    const handleBookmarkClick = () => {
        props.addBookmark(quote);
    };

    return ( 
        <div className="home">
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
    addBookmark
};

export default connect(null, mapDispatchToProps)(Home);