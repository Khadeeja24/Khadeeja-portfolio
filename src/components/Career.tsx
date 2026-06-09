import "./styles/Career.css";

const timeline = [
  {
    role: "Research Intern",
    company: "Insight Centre for Data Analytics, University of Galway",
    period: "June 2026 — Present", badge: "Current",
    points: [
      "Developing multi-agent AI for skin disease diagnosis using VLMs, RAG, and memory-based reasoning.",
      "Researching multimodal AI and dermatology foundation models for healthcare applications.",
    ],
  },
  {
    role: "M.Sc. Data Science",
    company: "Aligarh Muslim University, Aligarh, India",
    period: "2024 — 2026", badge: "Education",
    points: [
      "Specialising in ML, deep learning, NLP, and GenAI systems.",
      "Completed research projects spanning healthcare AI and statistical analysis.",
    ],
  },
];

const Career = () => {
  return (
    <section className="career-section" id="career">
      <div className="career-inner">
        <div>
          <p className="title">Experience</p>
          <h2 className="career-heading">Career <span>&</span><br />Journey</h2>
        </div>
        <div className="career-timeline">
          {timeline.map((item, i) => (
            <div className="career-item" key={i}>
              <div className="career-dot"></div>
              <span className="career-badge">{item.badge}</span>
              <div className="career-meta">
                <div>
                  <div className="career-role">{item.role}</div>
                  <div className="career-company">{item.company}</div>
                </div>
                <span className="career-period">{item.period}</span>
              </div>
              <ul className="career-desc">
                {item.points.map((p, j) => <li key={j}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;