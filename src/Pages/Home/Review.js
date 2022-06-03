import React from 'react';
const Review = ({ review }) => {
    const { img, name, comment } = review;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <div className="avatar online">
                    <div className="w-24 rounded-full">
                        <img src={img} alt='' />
                    </div>
                </div>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{comment}</p>
                <div className="rating">
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-warning" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-warning" checked />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-warning" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-warning" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-warning" />
                </div>
            </div>

        </div>
    );
};

export default Review;