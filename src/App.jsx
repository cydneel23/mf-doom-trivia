import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Trivia from "./pages/Trivia/Trivia";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import "nes.css/css/nes.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trivia" element={<Trivia />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
