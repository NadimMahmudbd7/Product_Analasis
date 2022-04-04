import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="nav flex justify-around sticky top-0 z-20">
            <div className="leftSide text-3xl font-bold font-mono my-3 mr-20 ">
                <h2 className='animate__animated wow animate__zoomIn '>Smart <span className='text-blue-800 font-sans'>W</span>atch</h2>
            </div>
            <div className='text-xl mx-3 flex gap-5 justify-end my-3 mr-20 sticky top-0'>
                
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")}to='/'>Home</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")}to='/reviews'>Reviews</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")}to='/dashboard'>Dashboard</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")}to='/blog'>Blog</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")}to='/about'>About</NavLink>
        </div>
        </div>
    );
};

export default Navbar;