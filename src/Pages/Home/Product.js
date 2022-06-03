import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, img, name, description, minimumOrder, availableQuantity, price } = product;
    const navigate = useNavigate();
    const handleBuy = (id) => {
        navigate(`/purchase/${id}`);
    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl my-3">
            <figure><img src={img} alt=" " /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description} </p>
                <h4 className='font-bold'>Minimum Quantity: {minimumOrder} </h4>
                <h4 className='font-bold'>Available Quantity: {availableQuantity}</h4>
                <h4 className='font-bold text-xl'>Price: ${price}</h4>
                <div className="card-actions justify-end">
                    <button onClick={() => handleBuy(_id)} disabled={parseInt(availableQuantity) <= 3} className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold">{parseInt(availableQuantity) <= 3 ? 'No available' : 'Purchase Now'}</button>
                </div>
            </div>
        </div>
    );
};

export default Product;