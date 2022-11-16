import React from 'react';
import Nav from "./Nav"

function Home() {
    return (
        <div home-grid>
            <Nav />
            <div className='searchBar'>
                <input
                className='searchBox'
                type= "text"
                name="search"
                placeholder='Type a keyword here to find your video'
                 />
                 <button className='searchButton'
                 type="submit"
                 value="search"
                 >Search</button>
            </div>
            <div className='noSearchMsgbar'><p className='noSearchMsg'>No search results are displayed. Please enter a keyword to search and display videos</p></div>
            <p className="tempVideoText">Area of Search Results - Videos</p>

            <div className='videoBox'> </div>

        </div>
        
      
    );
}

export default Home;

