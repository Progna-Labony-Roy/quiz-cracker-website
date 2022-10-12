import React from "react";
import Option from "../Option/Option";
import "./Question.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import "./Question.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Question = ({ question, option }) => {
  const options = question.options;
  

  const notify = () => toast(question.correctAnswer);

  return (
    <div className="container questionAnswer">
      <div className="eye-icon">
        <Button onClick={notify}>
          <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
        </Button>
        <ToastContainer />
      </div>

      <h4>{question.question.replace(/(<([^>]+)>)/gi, "")}</h4>
      <div className="grid options-grid">
      {options.map((option, idx) => (
        
        <Option key={idx} option={option}></Option>
      
  ))}
      </div>
    </div>
  );
};

export default Question;
