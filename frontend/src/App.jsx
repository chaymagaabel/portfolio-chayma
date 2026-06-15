import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {

    const cursor = document.querySelector(".cursor");

    document
      .querySelectorAll("a, button, li")
      .forEach(el => {

        el.addEventListener("mouseenter", () => {

          cursor.classList.add("active");

        });

        el.addEventListener("mouseleave", () => {

          cursor.classList.remove("active");

        });

      });

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
          <li>
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

      <section className="hero">
        <div className="particles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="floating-icon code">&lt;/&gt;</div>
        <div className="floating-icon ai">AI</div>
        <div className="floating-icon db">DATABASE</div>
        <div className="glow"></div>

        <h1>CHAYMA GAABEL</h1>

        <p>
          FULL STACK DEVELOPER • AI ENGINEER • MACHINE LEARNING ENGINEER • SOFTWARE ENGINEER 
        </p>

        <div className="scroll-indicator">
          <div className="scroll-arrow">↓</div>
        </div>
      </section>
    </div>
  );
}

export default App;