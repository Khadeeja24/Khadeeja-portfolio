import "./styles/TechStack.css";

const allTech = [
  { name: "Python", cat: "Language" },
  { name: "TensorFlow", cat: "ML" },
  { name: "PyTorch", cat: "ML" },
  { name: "Scikit-Learn", cat: "ML" },
  { name: "XGBoost", cat: "ML" },
  { name: "BERT", cat: "NLP" },
  { name: "HuggingFace", cat: "NLP" },
  { name: "LangChain", cat: "GenAI" },
  { name: "LangGraph", cat: "GenAI" },
  { name: "FAISS", cat: "Vector DB" },
  { name: "FastAPI", cat: "Deploy" },
  { name: "Flask", cat: "Deploy" },
  { name: "Streamlit", cat: "UI" },
  { name: "Gradio", cat: "UI" },
  { name: "Pandas", cat: "Analysis" },
  { name: "R", cat: "Statistics" },
  { name: "Tableau", cat: "Viz" },
  { name: "Keras", cat: "DL" },
  { name: "ResNet-50", cat: "CV" },
  { name: "ViT", cat: "CV" },
  { name: "RAG", cat: "GenAI" },
  { name: "SQL", cat: "Database" },
  { name: "Power BI", cat: "Viz" },
  { name: "LSTM", cat: "Seq Models" },
];

const TechStack = () => {
  return (
    <section className="techstack-section">
      <div className="techstack-inner">
        <p className="title">Technical Skills</p>
        <h2 className="techstack-heading">
          My <span>Techstack</span>
        </h2>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...allTech, ...allTech].map((t, i) => (
            <div className="tech-pill" key={i}>
              <div className="tech-pill-dot"></div>
              <span className="tech-pill-name">{t.name}</span>
              <span className="tech-pill-cat">{t.cat}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="marquee-wrapper marquee-reverse">
        <div className="marquee-track">
          {[...allTech, ...allTech].map((t, i) => (
            <div className="tech-pill" key={i}>
              <div className="tech-pill-dot"></div>
              <span className="tech-pill-name">{t.name}</span>
              <span className="tech-pill-cat">{t.cat}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;