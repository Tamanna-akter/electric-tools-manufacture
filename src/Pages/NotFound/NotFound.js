import React from 'react';
import notfound from './../../images/notfound.gif';

const NotFound = () => {
    return (
        <div className="flex justify-center h-screen">
        <img className="shadow-lg " src={notfound} alt="" />
        {/* <h4 className="text-center">Sorry page not found ! 404 !!</h4> */}
      </div>
    );
};

export default NotFound;