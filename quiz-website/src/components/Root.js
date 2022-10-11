import React from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';
import Home from './Home/Home';



const Root = () => {
    
    return (
        <div>
            <Header></Header>
            <Home></Home>
            <Outlet></Outlet>
        </div>
            
       
    );
};

export default Root;