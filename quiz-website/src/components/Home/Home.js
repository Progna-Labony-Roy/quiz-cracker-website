import React from 'react';
import Topics from '../Topics/Topics';
import './Home.css'

const Home = () => {
    return (
        <div>
            <h1 className='mt-5'>Welcome to the <span className='purple'>quiz community</span></h1>
            <p className='mt-2 fs-4'>Learn and Practice here for free</p>
            <section>
                <Topics></Topics>
            </section>
        </div>
    );
};

export default Home;