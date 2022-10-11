import React from "react";
import Alltopics from "../Alltopics/Alltopics";
import Header from "../Header/Header";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="home-container">
        <h1 className="pt-5">
          Welcome to the <span className="purple">quiz community</span>
        </h1>
        <p className="mt-2 fs-4">Learn and Practice here for free</p>
        <Alltopics></Alltopics>
      </div>
    </div>
  );
};

export default Home;
