import "./App.css";
import { useEffect } from "react";

import Home from "./sections/Home";
import Expertise from "./sections/Expertise";
import Work from "./sections/Work";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function App() {
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

  return (
    <div className="home">
      <div className="cursor">
        <div className="cursor-dot"></div>
      </div>

      <nav className="navbar">
        <a href="/" className="logo">
          Chayma Gaabel<span>._</span>
        </a>

        <ul className="nav-links">
          <li className="active">
            <span>01</span>
            <p>// home</p>
          </li>

          <li>
            <span>02</span>
            <p>// expertise</p>
          </li>

          <li>
            <span>03</span>
            <p>// work</p>
          </li>

          <li>
            <span>04</span>
            <p>// experience</p>
          </li>

          <li>
            <span>05</span>
            <p>// contact</p>
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