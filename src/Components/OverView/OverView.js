import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReviewsContext } from '../../App';
import { CustomerThreeReviews } from '../CustomerSays/CustomerSays';
import ForThreeReview from '../ForThreeReview/ForThreeReview';
import "./Overview.css"

const OverView = () => {

    let forThree = CustomerThreeReviews()

    // console.log(forThree);
    return (
        <div className="section">
            <div className='flex justify-evenly my-16'>
                <div className="details text-4xl font-bold flex items-center">
                    <div className="title ">
                        <h1 className='text-blue-700'>Smart Band And Fitness Tracker Watch</h1>
                        <h1 className='text-gray-600'>Life is easy</h1>
                        <p className='text-xl font-normal text-gray-500'>A smartwatch is a wearable computing <br></br> device that closely resembles a wristwatch or other time-keeping device.<br></br>
                            In addition to telling time, many smartwatches are Bluetooth-capable.</p>
                    </div>
                </div>

                <div className="image">
                    <img className='rounded-2xl' src={"smartwatch.jpg"} alt="" />
                </div>
            </div>
            <div className="cutomerThreeRemi">
                <h1 className='text-3xl text-center font-bold my-10'>Customer Reviews : 3</h1>
            <div className="customerSays grid grid-cols-3">
                {forThree?.map(review => <ForThreeReview review ={review} key={review.id}></ForThreeReview>)}
            </div>
            <div className="reviewButton flex justify-center">
            <Link className='px-10 py-1 rounded my-10 flex w-96 justify-center bg-purple-500' to={"/reviews"}>See all reviews </Link>
            </div>
            </div>
        </div>
    );
};

export default OverView;