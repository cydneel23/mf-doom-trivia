import React from "react";
import "./Home.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "/thegif.gif?url";

const Home = ({ name, setName, difficulty, setDifficulty }) => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleStart = () => {
    if (name && difficulty) {
      navigate("./trivia");
    } else {
      setError(true);
      return;
    }
  };

  return (
    <div>
      {error && (
        <h2 className="error-text">
          You Must Fill All Fields Before Starting!
        </h2>
      )}
      {/* <img className="doom-gif" src={logo} alt="loading..." /> */}
      <div className="main-container">
        <h2 className="container-title">Fill All Fields</h2>
        <input
          type="text"
          className="fields"
          placeholder="Enter Your Name"
          value={name}
          onInput={(e) => setName(e.target.value)}
        ></input>
        <select
          className="fields"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="">Select Difficulty Level...</option>
          <option value="0">Easy</option>
          <option value="1">Medium</option>
          <option value="2">Hard</option>
        </select>
        <button type="button" className="fields" onClick={handleStart}>
          START
        </button>
      </div>
      <div className="gifs">
        <img className="doom-gif" src={logo} alt="loading..." />
        <img className="doom-gif" src={logo} alt="loading..." />
      </div>
    </div>
  );
};

export default Home;
