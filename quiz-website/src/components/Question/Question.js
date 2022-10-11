import React from 'react';

import './Question.css'

const Question = ({question}) => {
    return (
        <div  className='container question'>
            <h4>{question.question.replace(/(<([^>]+)>)/ig, '')}</h4>
            
        </div>
    );
};

export default Question;