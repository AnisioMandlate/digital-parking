import { Routes, Route } from "react-router-dom";

// Components
import Login from "../src/components/Auth/Login";
import Register from "../src/components/Auth/Register";
import Home from "../src/components/pages/Home";
import About from "../src/components/pages/About";

// Styles
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
