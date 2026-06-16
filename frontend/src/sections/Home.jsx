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

      <div className="hero-top">

        <div className="hero-text">
          <h1 className="signature-name">
            <span className="first-name">Chayma</span>
            <span className="last-name">Gaabel</span>
          </h1>
        </div>

        <div className="hero-image">
          <img src={profileImg} alt="Chayma" />
        </div>

      </div>

      <p className="hero-subtitle">
        FULL STACK DEVELOPER • AI ENGINEER • MACHINE LEARNING ENGINEER • SOFTWARE ENGINEER
      </p>

    </div>

      <div className="scroll-indicator">
        <div className="scroll-arrow">↓</div>
      </div>

    </section>
  );
}

export default Home;