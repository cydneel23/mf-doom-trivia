import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home/Home";
import Trivia from "./pages/Trivia/Trivia";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Score from "./pages/Score/Score";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [score, setScore] = useState(0);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                name={name}
                setName={setName}
                difficulty={difficulty}
                setDifficulty={setDifficulty}
              />
            }
          />
          <Route
            path="/trivia"
            element={
              <Trivia
                name={name}
                score={score}
                setScore={setScore}
                difficulty={difficulty}
              />
            }
          />
          <Route
            path="/trivia/score"
            element={<Score name={name} score={score} />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
