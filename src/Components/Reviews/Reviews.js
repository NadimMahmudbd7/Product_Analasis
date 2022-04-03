import React, { useContext, useEffect } from 'react';
import { ReviewsContext } from '../../App';
import Review from '../Review/Review';

const Reviews = () => {

    const [reviews] = useContext(ReviewsContext)


    return (
        <>
        <h1 className='text-5xl my-10 text-center'>Check What Customers Are Saying About Us</h1>
        <div className=" grid grid-cols-3 gap-y-8 gap-x-1" >
           {
              (reviews && reviews.map(review => <Review review={review} key={review.id}></Review>))
           }
        </div>
        </>
        
    );
};

export default Reviews;