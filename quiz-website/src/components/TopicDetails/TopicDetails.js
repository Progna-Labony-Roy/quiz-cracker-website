import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";
import "./TopicDetails.css";


const TopicDetails = () => {
  const LoadDetails = useLoaderData();
  const questions = LoadDetails.data.questions;
  const {name}=LoadDetails.data;
  
  return (
    <div className="">
      <h2 className="m-4"><span className="text-cyan-600 fw-bold">{name}</span> quiz questions</h2>
      {questions.map((question) => (
        
        <Question key={question.id} question={question}></Question>
      ))}
      
    </div>
  );
};

export default TopicDetails;
