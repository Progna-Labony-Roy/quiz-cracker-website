import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Topic.css";

// import Topics from '../Topics/Topics';

function Topic({ topic }) {
  const { id, name, logo, total } = topic;
  return (
    <div className="quizTopic">
      <img src={logo} alt="" />
      <div className="topicName">
        <div className="container flex space-x-24">
          <p>{total} questions</p>
          <p  className="fw-bold">{name} </p>
        </div>
        <Link to={`/topic/${id}`}>
          <Button className="btn w-100 ">Start quiz</Button>
        </Link>
      </div>
    </div>
  );
}

export default Topic;
