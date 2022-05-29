import React from 'react';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Summary from './Summary';
import Tools from './Tools';
import Review from './Review';

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <Tools></Tools>
           <Review></Review>
           <Summary></Summary>
           <About></About>
           <Contact></Contact>
        </div>
    );
};

export default Home;