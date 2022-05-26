import React from 'react';
import About from './About';
import Banner from './Banner';
import Summary from './Summary';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <Tools></Tools>
           <Summary></Summary>
           <About></About>
        </div>
    );
};

export default Home;