import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <Link to='/'><span className='nav-item fs-5 text-dark fw-semibold p-3'>Home</span></Link>
                <Link to='/topics'><span className='nav-item fs-5 text-dark fw-semibold p-3'>Topics</span></Link>
                <Link to='/statistics'><span className='nav-item fs-5 text-dark fw-semibold p-3'>Statistics</span></Link>
                <Link to='/blog'><span className='nav-item fs-5 text-dark fw-semibold p-3'>Blog</span></Link>
            </nav>
        </div>
    );
};

export default Header;