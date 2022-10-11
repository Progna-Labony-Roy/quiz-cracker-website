import React from "react";
import { useLoaderData } from "react-router-dom";
import Option from "../Option/Option";
import Question from "../Question/Question";
import "./TopicDetails.css";

const TopicDetails = () => {
  const LoadDetails = useLoaderData();
  const questions = LoadDetails.data.questions;
  const options=questions[0].options;
  
  
  return (
    <div>
      {questions.map((question) => (
        <Question key={question.id} question={question} ></Question>
      ))}
      {
        options.map((option) => <Option option={option}></Option>)
      }
    </div>
  );
};

export default TopicDetails;
