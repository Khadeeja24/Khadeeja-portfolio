import { useRef, useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import "./styles/Work.css";

const projects = [
  {
    num: "01", year: "2026",
    title: "MAAI-SkinDx — Multi-Agent Diagnosis",
    cat: "Agentic AI · Healthcare · Explainable AI",
    tools: "LangGraph · ReAct · ResNet-50 · Grad-CAM · Groq LLaMA",
    icon: "🩺", color: "#ef4444",
    note: "Research · code not public",
  },
  {
    num: "02", year: "2026",
    title: "Voice to SQL Assistant",
    cat: "GenAI · Speech · Text-to-SQL",
    tools: "Whisper · LangChain · Groq LLaMA · PostgreSQL · FastAPI",
    icon: "🎙️", color: "#3b82f6",
    github: "https://github.com/Khadeeja24/voice-to-sql-assistant",
  },
  {
    num: "03", year: "2026",
    title: "SHL Assessment Recommender",
    cat: "GenAI · Retrieval · Conversational AI",
    tools: "LangChain · Groq LLaMA 3.3 70B · BM25 · TF-IDF · Docker",
    icon: "🎯", color: "#14b8a6",
    github: "https://github.com/Khadeeja24/shl-recommender",
  },
  {
    num: "04", year: "2026",
    title: "Multimodal Fake Review Detection",
    cat: "Deep Learning · NLP · Computer Vision",
    tools: "BERT · ViT · TensorFlow · GNN · HuggingFace",
    icon: "🔍", color: "#8b5cf6",
    github: "https://github.com/Khadeeja24/FakeGuard-Multimodal-Fake-Review-Detection",
  },
  {
    num: "05", year: "2026",
    title: "Conversational AI Lead Gen Agent",
    cat: "GenAI · LLMs · Agentic Systems",
    tools: "LangChain · LangGraph · FAISS · Flask · Groq",
    icon: "🤖", color: "#06b6d4",
  },
  {
    num: "06", year: "2025",
    title: "Parkinson's Disease Detection",
    cat: "Healthcare AI · Multi-Model ML",
    tools: "XGBoost · ANN · Keras · SMOTE · Python",
    icon: "🧠", color: "#10b981",
  },
  {
    num: "07", year: "2024",
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
                <div className="work-card-links">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-card-link"
                      style={{ borderColor: `${p.color}55`, color: p.color }}
                      onClick={(e) => e.stopPropagation()}
                      onMouseDown={(e) => e.stopPropagation()}
                    >
                      Code <MdArrowOutward size={13} />
                    </a>
                  )}
                  {p.note && <span className="work-card-note">{p.note}</span>}
                </div>
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