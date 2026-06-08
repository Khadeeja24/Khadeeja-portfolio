import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/Career.css";

gsap.registerPlugin(ScrollTrigger);

const timeline = [
  {
    role: "Research Intern",
    company: "Insight Centre for Data Analytics, University of Galway, Ireland",
    supervisor: "Prof. Saeed H. Alsamhi",
    period: "June 2026 — Present",
    badge: "Current",
    points: [
      "Developing a multi-agent AI framework for skin disease diagnosis using Vision-Language Models, RAG, and memory-based reasoning.",
      "Researching multimodal AI, agentic systems, and dermatology foundation models for healthcare applications.",
    ],
  },
  {
    role: "M.Sc. Data Science",
    company: "Aligarh Muslim University, Aligarh, India",
    period: "2024 — 2026",
    badge: "Education",
    points: [
      "Specialising in machine learning, deep learning, NLP, and GenAI systems.",
      "Completed research projects spanning healthcare AI, fake review detection, and statistical analysis.",
    ],
  },
  {
    role: "Project — Multimodal Fake Review Detection",
    company: "BERT + ViT + GNN · HuggingFace Spaces",
    period: "2026",
    badge: "Project",
    points: [
      "Achieved 99.72% F1-score on 12,254 samples using Cross-Modal Attention fusion.",
      "Deployed as interactive web application for real-time inference.",
    ],
  },
  {
    role: "Project — Parkinson's Disease Detection",
    company: "Custom ANN · XGBoost · TensorFlow/Keras",
    period: "2025",
    badge: "Project",
    points: [
      "Custom ANN with L2 regularisation achieved 97.44% accuracy, 100% precision, F1 0.98.",
      "Benchmarked 7 classifiers on 195 biomedical voice samples with SMOTE balancing.",
    ],
  },
];

const Career = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.from(sectionRef.current.querySelectorAll(".career-item"), {
      opacity: 0,
      x: -20,
      stagger: 0.15,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
    });
  }, []);

  return (
    <section className="career-section" id="career" ref={sectionRef}>
      <div className="career-inner">
        <div>
          <p className="title">Experience</p>
          <h2 className="career-heading">
            Career <span>&</span>
            <br />Journey
          </h2>
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
                  {item.supervisor && (
                    <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: 2 }}>
                      Supervisor: {item.supervisor}
                    </div>
                  )}
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
