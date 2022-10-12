import React from "react";
import { Button } from "react-bootstrap";

import "./Option.css";

const Option = ({ option }) => {
  return (
    <div>
      <Button className="option-btn bg-white">
        <li className="option text-dark">{option}</li>
      </Button>
    </div>
  );
};

export default Option;
