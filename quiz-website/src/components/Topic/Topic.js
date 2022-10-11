import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Topic.css";

// import Topics from '../Topics/Topics';

function Topic({ topic }) {
  const {id,name,logo}=topic;
  return (
    <div className="quizTopic">
      <img src={logo} alt="" />
      <div className="topicName">
        <p>{name}</p>
        <Link to={`/topic/${id}`}><Button className="btn w-100 ">Start quiz</Button></Link>
      </div>
    </div>
  );
}

export default Topic;