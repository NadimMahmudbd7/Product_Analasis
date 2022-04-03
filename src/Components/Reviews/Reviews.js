import React, { useContext, useEffect } from 'react';
import { ReviewsContext } from '../../App';
import Review from '../Review/Review';

const Reviews = () => {

    const [reviews, setReviews] = useContext(ReviewsContext)

    console.log(reviews);

    return (
        <>
        <h1 className='text-5xl my-10'>Check What Customers Are Saying About Us</h1>
        <div className=" grid grid-cols-3 gap-10" >
           {
              (reviews && reviews.map(review => <Review review={review} key={review.id}></Review>))
           }
        </div>
        </>
        
    );
};

export default Reviews;