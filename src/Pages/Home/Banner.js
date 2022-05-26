import React from 'react';
import banner from  './../../images/banner.jpg';
const Banner = () => {
    return (
        <div className="flex justify-center">
        <img className="shadow-lg w-full" src={banner} alt="banner" />
      </div>
    );
};

export default Banner;