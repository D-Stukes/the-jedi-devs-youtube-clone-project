import React from 'react';
import Nav from './Nav';
function About() {
    return (
        <div>
            <>
            <Nav />
            <div className='about-grid'>  
                <div className='LNgridBox'>
                <h1 className='LN-name'>Lennie Nurse</h1>
                <h2 className='LN-title'>An Rising Software Engineer</h2> 
                <h4>Technologies: HTML, CSS, JavaScript, Python, Node.js, React.Js, GitHub</h4>
                <div className='aboutLennie-pic'></div>
                <p className='LN-description'>I am currently a Full Stack Developer Fellow at Pursuit. It's has been a good struggle, but I love it. At Pursuit, I am hoping my dreams will come true. I would to get into the gaming industry or a streaming service company. We are currently building a YouTube page as group. It is great way of learning how make streaming media online as team.<br/><br/>
                    My interests are: sports, trading, computers, gaming. I am married with three kids. I am currently learning Javascript, and React.js but hopefully will go into C++, and Python. Cybersecurity or industry gaming is my end goal. My favorite movies are Matrix and Star Wars. I love Anime and am a heavy manga reader. My kids would call me a "chef", but i do not think my cooking skills are really not that great compared to their grandmas.</p>
                
                </div>


                <div className='DSgridBox'>
                    <h1 className='DS-name'>Diane Stukes</h1>
                    <h2 className='DS-title'>An Emerging Software Engineer</h2>  
                    <h4>Technologies: HTML, CSS, CSS-Grid, JavaScript, Node.js, React.Js, GitHub  </h4>
                    <div className='aboutDiane-pic'></div>
                    <p className='DS-description'>I became a Pursuit Fellow after experiencing a fruitful career as an IT professional in a roles such as Help Desk Analyst, Corporate Trainer and Technical Writer. I made the pivotal decision to transition into the world of Software Engineering because I want to change my life, and re-angle my trajectory by gaining the ability to be a part of change and innovation where it originates - in the code, back-end and front-end. <br/><br/>I believe I bring the richness of those journeys into my perspective as a Software Engineer, making me well-rounded and multi-faceted. I love being on this side of IT, where I can contribute to creative solutions, and look forward to one day, developing exciting, innovative applications of my own.
                        <br/><br/> 

                        As a human being, I am warm, friendly, kind and have a great sense of humor. I take pride in all of my endeavors, whether professional or personal and always strive for excellence because it brings me joy. <br/><br/> I enjoy a variety of music, puzzles, documentaries, and cinema genres, with SCI FI such as The Matrix Trilogy and Lord of the Rings being among my favorite. I am also an artist, song writer and singer. I am happily married and enjoy being one of many family members. I have also served in my community, assisting in distributing needs to sheltered citizens, among other volunteer services. I do love giving back and helping others.
                    </p>
                </div>
            </div>
            </>
        </div>


        
    );
}

export default About;