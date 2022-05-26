import { faBuildingColumns, faSackDollar, faStarOfDavid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Summary = () => {

    const element1 = <FontAwesomeIcon icon={faSackDollar} />;
    const element2 = <FontAwesomeIcon icon={faStarOfDavid} />;
    const element3 = <FontAwesomeIcon icon={faBuildingColumns} />;
    return (
        <div>
        <h1 className="text-3xl font-bold my-24 text-center">
          {" "}
          Business Summary
        </h1>
        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center -mt-16 mb-24"> */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center my-24">
          <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10 text-4xl ">{element1}</figure>
              <div className="card-body items-center text-center">
                <h2 className="text-4xl font-bold">50M+ </h2>
                <p className="font-bold">Annual revenue</p>
              </div>
            </div>
          </div>
  
          <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10 text-4xl">{element2}</figure>
              <div className="card-body items-center text-center">
                <h2 className="text-4xl font-bold ">33K+ </h2>
                <p className="font-bold">Reviews</p>
              </div>
            </div>
          </div>
  
          <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10 text-4xl">{element3}</figure>
              <div className="card-body items-center text-center">
                <h2 className="text-4xl font-bold">50+ </h2>
                <p className="font-bold">Tools</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Summary;