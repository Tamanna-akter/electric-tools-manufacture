import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({tool}) => {
    const navigate = useNavigate();

  const navigateToToolsPurchase = (toolsId) => navigate(`/tools/${toolsId}`);
  const {
    _id,
    name,
    img,
    min_quantity,
    available_quantity,
    unit_price,
    description,
  } = tool;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Min-Quantity: {min_quantity}</p>
        <p>Available-Quantity: {available_quantity}</p>
        <p>Unit-Price: ${unit_price}</p>
        <p>{description}</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => navigateToToolsPurchase(_id)}
            className="btn btn-neutral"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
    );
};

export default Tool;