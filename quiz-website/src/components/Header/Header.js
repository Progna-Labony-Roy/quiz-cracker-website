import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    
    return (
        <div className='main-header'>
            <Link><h1>quiz</h1></Link>
            <nav >
                <ul className='header md:flex'>
                <Link to='/'>Home</Link>
                <Link to='/topics'>Topics</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blog'>Blog</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;