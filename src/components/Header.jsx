import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='text-sm text-violet-800'>
            <Link to="/">Home</Link>
            <Link to="/friends">Friends</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
};

export default Header;