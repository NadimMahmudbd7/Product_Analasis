import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="questionAndAnswer">
                <h2 className="text-center text-4xl my-10 animate__animated wow animate__fadeInDown">Question And Answer</h2>
                <div className="grid grid-cols-2 gap-20 mx-10">
                    <div className="bg-white p-10 animate__animated wow animate__fadeInLeft">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-center mb-3 text-xl">Q1: why use Contex Api</h5>
                                <p className="card-text"> if I have main parent App.js. then App child Component1 and Component1 child Component2. now if i'll send any data from App.js to Component2, then at first App to send Component1 then component1 send to Component2 and Component2 receive this data using props. this is the pain. so if you want send direct data from App to Component2, so we will use Context Api</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-10 animate__animated wow animate__fadeInRight">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-center mb-3 text-xl">Q2: what is Semantic tag</h5>
                                <p className="card-text">
                                    This is most important think to use Semantic Tag. it makes webpages more informative and helps to search engines for better performance. and professional developer habbit is used semantic tag. For example using div you can use better layout experience. you can use like Section , Header, Nav, Main, Footer etc are Semantic Elements. 
                                 </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blog;