import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/WhatIDo.css";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    num: "01",
    title: "Machine Learning",
    desc: "Building end-to-end ML pipelines from feature engineering to model deployment — CNNs, GNNs, ensemble methods, and custom neural architectures.",
    tags: ["Scikit-Learn", "TensorFlow", "XGBoost", "CNN", "ResNet-50", "SMOTE", "SHAP"],
  },
  {
    num: "02",
    title: "NLP & GenAI",
    desc: "Designing LLM-powered systems, RAG pipelines, and multi-agent workflows for real-world applications in healthcare, e-commerce, and conversational AI.",
    tags: ["BERT", "LangChain", "LangGraph", "FAISS", "RAG", "Prompt Engineering", "VLMs"],
  },
  {
    num: "03",
    title: "Data Analysis",
    desc: "Transforming raw data into decisions through statistical analysis, hypothesis testing, visualisation, and interpretable reporting.",
    tags: ["Pandas", "R", "Tableau", "Power BI", "PCA", "Feature Engineering", "ETL"],
  },
  {
    num: "04",
    title: "Deployment",
    desc: "Packaging ML models and agents as interactive web applications and APIs — from Hugging Face Spaces to Flask and FastAPI backends.",
    tags: ["FastAPI", "Flask", "Streamlit", "Gradio", "HuggingFace Spaces", "Docker"],
  },
];

const WhatIDo = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.from(sectionRef.current.querySelectorAll(".whatido-card"), {
      opacity: 0,
      y: 40,
      stagger: 0.12,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
    });
  }, []);

  return (
    <section className="whatido-section" ref={sectionRef}>
      <div className="whatido-inner">
        <div className="whatido-header">
          <h2 className="whatido-heading">
            WHAT<br /><span>I DO</span>
          </h2>
        </div>
        <div className="whatido-grid">
          {cards.map((card) => (
            <div className="whatido-card" key={card.num}>
              <div className="card-num">{card.num}</div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-desc">{card.desc}</p>
              <div className="card-tags">
                {card.tags.map((tag) => (
                  <span className="card-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
