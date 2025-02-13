import "../MainPage/App.css";
import Navbar from "../MainPage/Navbar/Navbar.jsx";
import ProfilePicture from "./IntroContainer/Website.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../AboutPage/About.jsx";

function App() {
  return (
    <Router>
      <div className="hero">
        <Navbar />
        <Routes>
          <Route path="/website" element={<ProfilePicture />} />
          <Route path="/about" element={<About />} />
          {/* Add routes for Projects and Github if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
