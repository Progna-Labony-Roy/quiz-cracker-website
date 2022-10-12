import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Question from "../Question/Question";
import "./TopicDetails.css";


const TopicDetails = () => {
  const LoadDetails = useLoaderData();
  const questions = LoadDetails.data.questions;
  const options=LoadDetails.data.questions[0].options;
  console.log(options)

  return (
    <div className="">
      <Header></Header>
      {questions.map((question) => (
        <Question key={question.id} question={question}>
          
        </Question>
        
          
  
      ))
      }
    {
      options.map(element=><li>{element}</li>)
    }
    </div>
  );
};

export default TopicDetails;
