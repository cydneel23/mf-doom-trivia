import React from "react";
import "./Home.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  //make function called startquiz -- takes difficulty level and starts
  //put trivia data into a folder called Questions -- and then put it into array
  const handleStart = () => {
    if (!difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      navigate("./trivia");
    }
  };

  return (
    <div>
      <div className="main-container">
        {/* conditional rendering below */}
        {error && <span>Please Fill All Fields Before Starting</span>}
        <div className="nes-field name-input">
          <input
            type="text"
            id="dark_field"
            className="nes-input is-dark"
            placeholder="Enter Your Name"
            value={name}
            onInput={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="select-diff">
          <div className="nes-select is-dark">
            <select
              required
              id="dark_select"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="" disabled selected hidden>
                Select Difficulty Level...
              </option>
              <option value="0">Easy</option>
              <option value="1">Medium</option>
              <option value="2">Hard</option>
            </select>
          </div>
        </div>
        <button
          type="button"
          className="nes-btn start-btn"
          onClick={handleStart}
        >
          START
        </button>
      </div>
    </div>
  );
};

export default Home;
