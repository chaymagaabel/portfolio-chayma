import "./App.css";
import { useEffect, useState } from "react";

import Home from "./sections/Home";
import Expertise from "./sections/Expertise";
import Work from "./sections/Work";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    const moveCursor = (e) => {
      if (!cursor) return;

      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  useEffect(() => {
    const updateActiveLink = () => {
      const hash = window.location.hash.replace("#", "");

      if (hash) {
        setActiveSection(hash);
      } else {
        setActiveSection("home");
      }
    };

    updateActiveLink();

    window.addEventListener("hashchange", updateActiveLink);

    return () => {
      window.removeEventListener("hashchange", updateActiveLink);
    };
  }, []);

  return (
    <div className="home">
      <div className="cursor">
        <div className="cursor-dot"></div>
      </div>

      <nav className="navbar">
        <a href="#home" className="logo">
          Chayma Gaabel<span>._</span>
        </a>

        <ul className="nav-links">
          <li className={activeSection === "home" ? "active" : ""}>
            <a href="#home">
              <span>01</span>
              <p>// home</p>
            </a>
          </li>

          <li className={activeSection === "expertise" ? "active" : ""}>
            <a href="#expertise">
              <span>02</span>
              <p>// expertise</p>
            </a>
          </li>

          <li className={activeSection === "work" ? "active" : ""}>
            <a href="#work">
              <span>03</span>
              <p>// work</p>
            </a>
          </li>

          <li className={activeSection === "experience" ? "active" : ""}>
            <a href="#experience">
              <span>04</span>
              <p>// experience</p>
            </a>
          </li>

          <li className={activeSection === "contact" ? "active" : ""}>
            <a href="#contact">
              <span>05</span>
              <p>// contact</p>
            </a>
          </li>
        </ul>
      </nav>

      <Home />
      <Expertise />
      <Work />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;