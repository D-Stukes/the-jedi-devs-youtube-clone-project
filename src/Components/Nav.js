import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div>
            <nav>
                <label className='youTubeLabel'>YouTube</label>
                <Link className='homeLink' to="/">Home</Link>
                <Link className='aboutLink' to="/about">About</Link>
            </nav>
        </div>
    );
}

export default Nav;