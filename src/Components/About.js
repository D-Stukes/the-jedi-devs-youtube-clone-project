import React from 'react';
import Nav from './Nav';

function About() {
    return (
        <div about-grid>  
            <Nav />
            <div className='aboutLennie-grid'>
                <h1>Lennie Nurse</h1>
                <p>Lennie is Full Stack Developer</p>
            </div>

            <div className='aboutDiane-grid'>
                <h1>Diane Stukes</h1>
                <p>Diane is Full Stack Developer</p>
            </div>
        </div>


        
    );
}

export default About;