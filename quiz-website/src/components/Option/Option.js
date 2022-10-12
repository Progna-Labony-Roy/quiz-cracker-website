import React from "react";
// import { useLoaderData } from "react-router-dom";


const Option = ({option}) => {

  // const LoadDetails = useLoaderData();
  // const questions = LoadDetails.data.questions;
  // const options=questions[0].options;
  return (
    <div>
        <p>{option}</p> 
    </div>
  );
};

export default Option;