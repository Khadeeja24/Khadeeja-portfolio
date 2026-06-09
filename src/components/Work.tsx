import { useRef, useEffect } from "react";
import "./styles/Work.css";

const projects = [
  {
    num: "01", year: "2026",
    title: "Multimodal Fake Review Detection",
    cat: "Deep Learning · NLP · Computer Vision",
    tools: "BERT · ViT · TensorFlow · GNN · HuggingFace",
    icon: "🔍", color: "#8b5cf6",
  },
  {
    num: "02", year: "2026",
    title: "Conversational AI Lead Gen Agent",
    cat: "GenAI · LLMs · Agentic Systems",
    tools: "LangChain · LangGraph · FAISS · Flask · Groq",
    icon: "🤖", color: "#06b6d4",
  },
  {
    num: "03", year: "2025",
    title: "Parkinson's Disease Detection",
    cat: "Healthcare AI · Multi-Model ML",
    tools: "XGBoost · ANN · Keras · SMOTE · Python",
    icon: "🧠", color: "#10b981",
  },
  {
    num: "04", year: "2024",
    title: "Social Media & Mental Health Study",
    cat: "Statistics · Research",
    tools: "R · Hypothesis Testing · Chi-Square · Survey Design",
    icon: "📊", color: "#f59e0b",
  },
];

const Work = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    let isDown = false, startX = 0, scrollLeft = 0;
    const onDown = (e: MouseEvent) => { isDown = true; startX = e.pageX - wrapper.offsetLeft; scrollLeft = wrapper.scrollLeft; };
    const onUp = () => { isDown = false; };
    const onMove = (e: MouseEvent) => { if (!isDown) return; e.preventDefault(); wrapper.scrollLeft = scrollLeft - (e.pageX - wrapper.offsetLeft - startX); };
    wrapper.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    wrapper.addEventListener("mousemove", onMove);
    return () => { wrapper.removeEventListener("mousedown", onDown); window.removeEventListener("mouseup", onUp); wrapper.removeEventListener("mousemove", onMove); };
  }, []);

  return (
    <section className="work-section" id="work">
      <div className="work-header">
        <p className="title">Selected Projects</p>
        <h2 className="work-heading">My <span>Work</span></h2>
      </div>
      <div className="work-scroll-wrapper" ref={wrapperRef}>
        <div className="work-flex">
          {projects.map((p) => (
            <div className="work-card" key={p.num}>
              <div className="work-card-top" style={{ background: `${p.color}22` }}>
                <span className="work-card-icon-text">{p.icon}</span>
                <span className="work-card-num-bg">{p.num}</span>
              </div>
              <div className="work-card-body">
                <div className="work-card-meta">
                  <span className="work-card-num">{p.num}</span>
                  <span className="work-card-year">{p.year}</span>
                </div>
                <h3 className="work-card-title">{p.title}</h3>
                <p className="work-card-cat" style={{ color: p.color }}>{p.cat}</p>
                <p className="work-card-tools">{p.tools}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="work-drag-hint">
        <span>Drag to explore</span>
        <div className="work-drag-line"></div>
      </div>
    </section>
  );
};

export default Work;