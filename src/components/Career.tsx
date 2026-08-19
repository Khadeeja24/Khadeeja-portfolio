import "./styles/Career.css";

const timeline = [
  {
    role: "AI Intern",
    company: "Star Software, Bhopal, India",
    period: "July 2026 — Present", badge: "Current",
    points: [
      "Evaluating a multimodal LLM-based document extraction pipeline across extraction and validation stages, including comparative benchmarking between model versions (GPT-4.1-mini vs. GPT-5.6 Luna).",
      "Testing a LlamaParse-based extraction pipeline for MTR certificates and its downstream validation layer, documenting field-level failure patterns and flag/fix accuracy.",
      "Annotating multi-class datasets — tables, key-value pairs, entity regions — across 500+ industrial documents to support OCR and NER model training.",
    ],
  },
  {
    role: "Research Intern",
    company: "Insight Centre for Data Analytics, University of Galway",
    period: "May 2026 — July 2026", badge: "Research",
    points: [
      "Architected MAAI-SkinDx, a 7-agent LangGraph pipeline for automated dermatological diagnosis using a ReAct protocol with shared episodic memory.",
      "Benchmarked 5 foundation models and selected ResNet-50 on the precision-recall tradeoff, reducing inference latency by 18%.",
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