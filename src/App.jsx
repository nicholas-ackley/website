import "./MainPage/App.css";
import Navbar from "./MainPage/Navbar/Navbar.jsx";
import ProfilePicture from "./MainPage/IntroContainer/Website.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./AboutPage/About.jsx";
import Projects from "./ProjectsPage/Projects.jsx";
import Blog from "./BlogPage/Blog.jsx";
function App() {
  return (
    
    <Router basename="/website">
      <div className="hero">
        <Navbar />
        <Routes>
          <Route path="/" element={<ProfilePicture />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
