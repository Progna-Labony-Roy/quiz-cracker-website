import React from 'react';
import Option from '../Option/Option';
import { useLoaderData } from "react-router-dom";
import './Question.css'

const Question = ({question,option}) => {
  const LoadDetails = useLoaderData();
  const questions = LoadDetails.data.questions;
  const options=questions[0].options;
  console.log(options);

    return (
        <div  className='container questionAnswer'>
            <h4>{question.question.replace(/(<([^>]+)>)/ig, '')}</h4>
            {
                options.map((option ,idx) => 
                   <ul>
                    <li>
                    <Option key={idx} option={option}></Option>
                    </li>
                   </ul>
                )
            }
        </div>
    );
};

export default Question;