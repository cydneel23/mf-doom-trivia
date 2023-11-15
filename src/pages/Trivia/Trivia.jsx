import "./Trivia.css";
import Options from "../../components/Options/Options";
import {
  easy_questions,
  medium_questions,
  hard_questions,
} from "../../Data/QuestionData";
import { useState } from "react";

const Trivia = ({ name, score, setScore, difficulty }) => {
  const [currQuestion, setCurrQuestion] = useState(0);

  const getQuestions = () => {
    if (difficulty === "0") {
      return easy_questions;
    } else if (difficulty === "1") {
      return medium_questions;
    } else {
      return hard_questions;
    }
  };
  const questionArray = getQuestions();

  return (
    <div>
      <div className="user-stats">
        <h1 className="curr-score">Current Score: {score}</h1>
        {/* <h2 className="q-info">Question Number: {currQuestion + 1}</h2> */}
        <h2 className="q-info">
          Questions Remaining: {questionArray.length - (currQuestion + 1)}
        </h2>
      </div>
      <Options
        score={score}
        setScore={setScore}
        questionArray={questionArray}
        currQuestion={currQuestion}
        setCurrQuestion={setCurrQuestion}
      />
    </div>
  );
};

export default Trivia;
