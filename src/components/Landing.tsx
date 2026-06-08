import "./styles/Landing.css";

const skillNodes = ["LangChain", "PyTorch", "BERT", "RAG", "GSAP", "FastAPI"];

const Landing = () => {
  return (
    <section className="landing-section" id="landing">

      {/* Ambient blobs */}
      <div className="landing-blob1"></div>
      <div className="landing-blob2"></div>

      {/* Name — left */}
      <div className="landing-intro">
        <h2>Hello, I'm</h2>
        <h1>KHADEEJA</h1>
      </div>

      {/* Central orb with photo */}
      <div className="landing-orb-wrapper">
        <div className="landing-orb">

          <div className="orb-ring">
            <div className="orb-dot"></div>
          </div>
          <div className="orb-ring"></div>
          <div className="orb-ring"></div>

          {skillNodes.map((node, i) => (
            <span key={i} className="skill-node">{node}</span>
          ))}

          <div className="orb-center">
            <img
              src="/photo.jpg"
              alt="Khadeeja"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          </div>

        </div>
      </div>

      {/* Role — right */}
      <div className="landing-info">
        <h3>A Data</h3>
        <div className="landing-info-roles">
          <div className="role-slide">Scientist</div>
          <div className="role-slide">Engineer</div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-arrow"></div>
      </div>

    </section>
  );
};

export default Landing;