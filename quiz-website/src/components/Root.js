import React, { createContext } from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';
import Home from './Home/Home'

export const QuizContext = createContext();

const Root = () => {
    
    return (
        <QuizContext.Provider value={[]}>
            <Header></Header>
            <Home></Home>
            <Outlet></Outlet>
        </QuizContext.Provider>
    );
};

export default Root;