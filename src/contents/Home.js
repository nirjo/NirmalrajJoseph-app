import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Social from '../components/Social';


const Home =()=> {
        return (
            <div className="condiv home">
            <h1>Nirmalraj Joseph </h1>
            <ReactTypingEffect className="typingeffect" text={['A Full Stack Developer','A UI/UX Designer']} speed={100} eraseDelay={400}/>
            <div className="hr_line"><div className="hr_inner"></div></div>
            <Social />
            </div>
            )
        }

    
    export default Home