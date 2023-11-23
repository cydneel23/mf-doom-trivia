import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Trivia from "./pages/Trivia/Trivia";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Score from "./pages/Score/Score";
import "./App.css";
// import "nes.css/css/nes.min.css";
import { useState } from "react";

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

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDR-IaO02J50JqHPDzbMFH4WxZzrx4TBss",
//   authDomain: "mf-doom-trivia.firebaseapp.com",
//   projectId: "mf-doom-trivia",
//   storageBucket: "mf-doom-trivia.appspot.com",
//   messagingSenderId: "344687485659",
//   appId: "1:344687485659:web:283fd7267ff424606862fe",
//   measurementId: "G-W39SGL5CLS"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
