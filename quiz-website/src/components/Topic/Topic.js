import React from "react";
import { Button } from "react-bootstrap";
import "./Topic.css";

// import Topics from '../Topics/Topics';

function Topic({ topic }) {
  return (
    <div className="quizTopic">
      <img src={topic.logo} alt="" />
      <div className="topicName">
        <p>{topic.name}</p>
        <p><Button className="w-100">Start quiz</Button></p>
      </div>
    </div>
  );
}

export default Topic;
