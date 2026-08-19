import "./styles/About.css";

const certs = [
  { icon: "IBM", name: "Data Analysis with Python", issuer: "IBM · Cognitive Class" },
  { icon: "IBM", name: "Machine Learning with Python", issuer: "IBM · Cognitive Class" },
  { icon: "KGL", name: "Python for Machine Learning", issuer: "Kaggle" },
  { icon: "MTS", name: "Python Fundamentals Meets AI", issuer: "Marine Tech Society, AMU" },
  { icon: "MTS", name: "Deep Dive into AI Workshop", issuer: "Marine Tech Society, AMU" },
];

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-inner">
        <div className="about-left">
          <p className="title">About Me</p>
          <h2 className="about-heading">
            Building <em>intelligent</em>
            <br />systems that matter
          </h2>
          <p className="about-text">
            Data Science postgraduate from Aligarh Muslim University with hands-on
            experience building machine learning systems, deep learning models, NLP
            pipelines, and GenAI agents. Currently an AI Intern at Star Software,
            evaluating multimodal LLM document extraction pipelines. Previously a
            Research Intern at the Insight Centre for Data Analytics, University of
            Galway, where I architected a multi-agent framework for skin disease
            diagnosis.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-num">6+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">99%</div>
              <div className="stat-label">Best F1</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">5</div>
              <div className="stat-label">Certifications</div>
            </div>
          </div>
        </div>
        <div className="about-right">
          <p className="about-certs-title">Certifications</p>
          <div className="about-certs">
            {certs.map((cert, i) => (
              <div className="cert-item" key={i}>
                <div className="cert-icon">{cert.icon}</div>
                <div className="cert-info">
                  <div className="cert-name">{cert.name}</div>
                  <div className="cert-issuer">{cert.issuer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;