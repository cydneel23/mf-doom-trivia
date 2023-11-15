import React from "react";
import "./Score.css";

const Score = ({ name, score }) => {
  return (
    <div className="container">
      <p className="name-display">Hope you enjoyed,{name}!</p>
      <p className="score-display">Final Score: {score}</p>
    </div>
  );
};

export default Score;
