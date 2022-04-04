import React, { useContext, useEffect } from 'react';
import { ReviewsContext } from '../../App';
import Review from '../Review/Review';
import "./Reviews.css"

const Reviews = () => {

    const [reviews] = useContext(ReviewsContext)


    return (
        <>
        <h1 className='text-5xl my-10 text-center animate__animated wow animate__fadeInDown reviewsText'>Check What Customers Are Saying About Us</h1>
        <div className=" grid grid-cols-3 gap-y-8 gap-x-1 my-20 reviews" >
           {
              (reviews && reviews.map(review => <Review review={review} key={review.id}></Review>))
           }
        </div>
        </>
        
    );
};

export default Reviews;