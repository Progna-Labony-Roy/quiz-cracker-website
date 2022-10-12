import React from "react";
import './Option.css'
// import { useLoaderData } from "react-router-dom";


const Option = ({option}) => {

  // const LoadDetails = useLoaderData();
  // const questions = LoadDetails.data.questions;
  // const options=questions[0].options;
  return (
    <div>
        <li className="option">{option}</li>
    </div>
  );
};

export default Option;