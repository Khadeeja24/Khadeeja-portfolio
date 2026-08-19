import "./styles/WhatIDo.css";

const cards = [
  {
    num: "01", title: "Agentic AI",
    desc: "Designing multi-agent systems that plan, act, and verify — orchestrated graphs with shared memory, tool use, and ReAct reasoning loops.",
    tags: ["LangGraph", "ReAct", "Multi-Agent", "Tool Calling", "Groq LLaMA"],
  },
  {
    num: "02", title: "RAG & Retrieval",
    desc: "Building retrieval pipelines over large document sets — hybrid keyword and vector search, embedding models, and grounded generation.",
    tags: ["LangChain", "FAISS", "BM25", "Sentence Transformers", "RAG"],
  },
  {
    num: "03", title: "Machine Learning",
    desc: "Building end-to-end ML and deep learning pipelines from feature engineering to deployment — CNNs, transformers, and multimodal architectures.",
    tags: ["PyTorch", "TensorFlow", "BERT", "ViT", "ResNet-50", "XGBoost"],
  },
  {
    num: "04", title: "Deployment",
    desc: "Packaging models and agents as APIs and web apps, with guardrails, structured output, and containerised delivery.",
    tags: ["FastAPI", "Docker", "Flask", "Streamlit", "Gradio"],
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