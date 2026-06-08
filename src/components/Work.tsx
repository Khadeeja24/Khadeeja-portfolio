import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/Work.css";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    num: "01",
    year: "2026",
    title: "Multimodal Fake Review Detection",
    cat: "Deep Learning · Computer Vision · NLP",
    tools: "BERT · ViT · TensorFlow · Cross-Modal Attention · GNN",
    icon: "🔍",
    accent: "#8b5cf6",
    github: "https://github.com",
    demo: "https://huggingface.co",
  },
  {
    num: "02",
    year: "2026",
    title: "Conversational AI Lead Gen Agent",
    cat: "GenAI · LLMs · Agentic Systems",
    tools: "LangChain · LangGraph · FAISS · Sentence Transformers · Groq API · Flask",
    icon: "🤖",
    accent: "#06b6d4",
    github: "https://github.com",
    demo: "",
  },
  {
    num: "03",
    year: "2025",
    title: "Parkinson's Disease Detection",
    cat: "Healthcare AI · Multi-Model ML",
    tools: "XGBoost · ANN · TensorFlow/Keras · SMOTE · Python",
    icon: "🧠",
    accent: "#10b981",
    github: "https://github.com",
    demo: "",
  },
  {
    num: "04",
    year: "2024",
    title: "Social Media & Student Mental Health",
    cat: "Statistical Research · Survey Analysis",
    tools: "R · Hypothesis Testing · Stratified Sampling · Chi-Square · t-tests",
    icon: "📊",
    accent: "#f59e0b",
    github: "https://github.com",
    demo: "",
  },
];

const Work = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.from(sectionRef.current.querySelectorAll(".work-card"), {
      opacity: 0,
      y: 30,
      stagger: 0.12,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
    });

    // Drag-to-scroll
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - wrapper.offsetLeft;
      scrollLeft = wrapper.scrollLeft;
    };
    const onUp = () => { isDown = false; };
    const onMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - wrapper.offsetLeft;
      wrapper.scrollLeft = scrollLeft - (x - startX);
    };

    wrapper.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    wrapper.addEventListener("mousemove", onMove);
    return () => {
      wrapper.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      wrapper.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <section className="work-section" id="work" ref={sectionRef}>
      <div className="work-header">
        <p className="title">Selected Projects</p>
        <h2 className="work-heading">My <span>Work</span></h2>
      </div>
      <div className="work-scroll-wrapper" ref={wrapperRef}>
        <div className="work-flex">
          {projects.map((p) => (
            <div className="work-card" key={p.num}>
              <div
                className="work-card-top"
                style={{ "--card-bg": `${p.accent}18` } as React.CSSProperties}
              >
                <div className="work-card-visual">
                  <div className="work-card-num-bg">{p.num}</div>
                  <div className="work-card-icon" style={{ borderColor: `${p.accent}30`, background: `${p.accent}10` }}>
                    {p.icon}
                  </div>
                </div>
                <div className="work-card-hover-overlay">
                  <a href={p.github} target="_blank" rel="noopener" className="work-card-link">
                    View Project
                  </a>
                </div>
              </div>
              <div className="work-card-body">
                <div className="work-card-meta">
                  <span className="work-card-num">{p.num}</span>
                  <span className="work-card-year">{p.year}</span>
                </div>
                <h3 className="work-card-title">{p.title}</h3>
                <p className="work-card-cat">{p.cat}</p>
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
