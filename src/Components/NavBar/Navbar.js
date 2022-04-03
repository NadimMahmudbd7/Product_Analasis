import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="nav flex justify-around">
            <div className="leftSide">
                <h2 className='text-3xl font-bold font-mono my-3 mr-20 sticky top-0'>Smart Watch</h2>
            </div>
            <div className='text-xl mx-3 flex gap-5 justify-end my-3 mr-20 sticky top-0'>
            <Link to={"/"}>Home</Link>
            <Link to={"/reviews"}>Reviews</Link>
            <Link to={"/dashboard"}>Dashboard</Link>
            <Link to={"/blog"}>Blog</Link>
            <Link to={"/about"}>About</Link>
        </div>
        </div>
    );
};

export default Navbar;