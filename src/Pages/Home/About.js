import React from 'react';
import about from './../../images/about.jpg';

const About = () => {
    return (
        
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={about} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
            <div>
                <h1 className="text-5xl font-bold">About TEH Tools</h1>
                <p className="py-6 mx-auto">TEH IS A TOOLS BRAND ABOUT PROVIDING TOOLS FOR EVERY HOME. DISTRIBUTING HIGH END TOOLS TO HELP CREATE YOUR IDEAL VISION FOR A PROJECT, HOME, OR APPLICATION. WE ARE YOUR PARTNERS, CONFIDANTS AND MOST IMPORTANTLY YOUR GUIDANCE TO HELP YOU COMPLETE PROJECTS THAT MATTER.</p>
                <button className='btn btn-primary'>Join Us</button>
            </div>
        </div>
    </div>
    );
};

export default About;