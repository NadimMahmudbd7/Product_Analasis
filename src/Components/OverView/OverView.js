import React from 'react';

const OverView = () => {
    return (
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
    );
};

export default OverView;