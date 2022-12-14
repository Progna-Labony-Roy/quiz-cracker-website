import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="main-header">
      <Link>
        <h1>quiz</h1>
      </Link>


      <nav className="header md:flex">
        <Link to="/home">Home</Link>
        <Link to="/topics">Topics</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    </div>
  );
};

export default Header;
