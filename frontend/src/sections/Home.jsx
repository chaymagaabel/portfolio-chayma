import profileImg from "../assets/chayma.png";

function Home() {
  return (
    <section id="home" className="hero">

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

      <div className="hero-content">

        <div className="hero-text">
          <h1>
            CHAYMA <br />
            GAABEL
          </h1>

          <p>
            FULL STACK DEVELOPER • AI ENGINEER • MACHINE LEARNING ENGINEER • SOFTWARE ENGINEER
          </p>
        </div>

        <div className="hero-image">
          <img src={profileImg} alt="Chayma" />
        </div>

      </div>

      <div className="scroll-indicator">
        <div className="scroll-arrow">↓</div>
      </div>

    </section>
  );
}

export default Home;