import "./styles/WhatIDo.css";

const cards = [
  {
    num: "01", title: "Machine Learning",
    desc: "Building end-to-end ML pipelines from feature engineering to deployment — CNNs, GNNs, ensemble methods, and custom neural architectures.",
    tags: ["Scikit-Learn", "TensorFlow", "XGBoost", "CNN", "ResNet-50", "SMOTE"],
  },
  {
    num: "02", title: "NLP & GenAI",
    desc: "Designing LLM-powered systems, RAG pipelines, and multi-agent workflows for healthcare, e-commerce, and conversational AI.",
    tags: ["BERT", "LangChain", "LangGraph", "FAISS", "RAG", "VLMs"],
  },
  {
    num: "03", title: "Data Analysis",
    desc: "Transforming raw data into decisions through statistical analysis, hypothesis testing, visualisation, and reporting.",
    tags: ["Pandas", "R", "Tableau", "Power BI", "PCA", "Feature Engineering"],
  },
  {
    num: "04", title: "Deployment",
    desc: "Packaging ML models and agents as interactive web apps and APIs — from Hugging Face Spaces to Flask and FastAPI.",
    tags: ["FastAPI", "Flask", "Streamlit", "Gradio", "HuggingFace Spaces"],
  },
];

const WhatIDo = () => {
  return (
    <section className="whatido-section">
      <div className="whatido-inner">
        <div className="whatido-header">
          <h2 className="whatido-heading">WHAT<br /><span>I DO</span></h2>
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