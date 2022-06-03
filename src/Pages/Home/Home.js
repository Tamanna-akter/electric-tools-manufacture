import React from 'react';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Summary from './Summary';

import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <Products></Products>
           <Reviews></Reviews>
           <Summary></Summary>
           <About></About>
           <Contact></Contact>
        </div>
    );
};

export default Home;