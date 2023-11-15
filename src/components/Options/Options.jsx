import Score from "../../pages/Score/Score";
import "./Options.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Options = ({
  score,
  setScore,
  currQuestion,
  setCurrQuestion,
  questionArray,
}) => {
  // The user's chosen answer
  const [chosen, setChosen] = useState();
  const navigate = useNavigate();

  const optionRender = (option) => {
    if (!option.isCorrect && option == chosen) {
      return "wrong-answer";
    } else if (option.isCorrect) {
      return "right-answer";
    }
  };

  const handleClick = (i) => {
    setChosen(i);
    if (i.isCorrect) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currQuestion >= questionArray.length - 1) {
      navigate("./score");
    } else if (chosen) {
      // reset the state
      setChosen();
      setCurrQuestion(currQuestion + 1);
    }
  };

  return (
    <div className="container">
      <h1 className="question">{questionArray[currQuestion].question}</h1>
      {questionArray[currQuestion].answers.map((i) => {
        return (
          <button
            className={`option-btn ${chosen && optionRender(i)}`}
            key={i.answerString}
            onClick={() => handleClick(i)}
            disabled={chosen}
          >
            {i.answerString}
          </button>
        );
      })}
      <button className="submit-btn" onClick={nextQuestion}>
        Next
      </button>
    </div>
  );
};

export default Options;
