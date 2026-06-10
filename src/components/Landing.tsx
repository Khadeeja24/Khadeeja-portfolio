import "./styles/Landing.css";

const skillNodes = ["Pytorch", "Langchain", "XGBoost", "BERT", "RAG", "Deep Learning"];

const Landing = () => {
  return (
    <section className="landing-section" id="landing">
      <div className="landing-blob1"></div>
      <div className="landing-blob2"></div>

      <div className="landing-intro">
        <h2>Hello, I'm</h2>
        <h1>KHADEEJA</h1>
        <p className="landing-tagline">M.Sc. Data Science · AMU</p>
      </div>

      <div className="landing-orb-wrapper">
        <div className="landing-orb">
          <div className="orb-ring"><div className="orb-dot"></div></div>
          <div className="orb-ring"></div>
          <div className="orb-ring"></div>
          {skillNodes.map((node, i) => (
            <span key={i} className="skill-node">{node}</span>
          ))}
          <div className="orb-center">
            <div className="orb-scan"></div>
            <img src="/photo.png" alt="Khadeeja" />
          </div>
        </div>
      </div>

      <div className="landing-info">
        <p className="landing-role-label">A</p>
        <h2 className="landing-role">Data Scientist</h2>
        <p className="landing-role-sub">Research Intern</p>
        <p className="landing-role-sub2">University of Galway, Ireland</p>
      </div>

      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Landing;