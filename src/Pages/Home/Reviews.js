import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Review from './Review';
// import Loading from '../../SharedPage/Loading';
// import Review from './Review';


const Reviews = () => {
    const { isLoading, error, data: reviews } = useQuery('reviews', () =>
        fetch('https://thawing-atoll-26359.herokuapp.com/review').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        return 'An error has occurred: ' + error.message
    }
    return (
        <div className='my-5'>
            <h1 className='text-center text-3xl text-primary font-bold'>Our Customer Reviews</h1>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    reviews.slice(0).reverse().slice(0, 3).map((review, index) => <Review
                        key={review._id}
                        review={review}
                        index={index}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;