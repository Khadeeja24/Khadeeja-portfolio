import Marquee from "react-fast-marquee";
import "./styles/TechStack.css";

const row1 = [
  { name: "Python", cat: "Language" },
  { name: "TensorFlow", cat: "ML" },
  { name: "PyTorch", cat: "ML" },
  { name: "Scikit-Learn", cat: "ML" },
  { name: "XGBoost", cat: "ML" },
  { name: "BERT", cat: "NLP" },
  { name: "HuggingFace", cat: "NLP" },
  { name: "LangChain", cat: "GenAI" },
];

const row2 = [
  { name: "LangGraph", cat: "GenAI" },
  { name: "FAISS", cat: "Vector DB" },
  { name: "FastAPI", cat: "Deploy" },
  { name: "Flask", cat: "Deploy" },
  { name: "Streamlit", cat: "UI" },
  { name: "Gradio", cat: "UI" },
  { name: "SQL", cat: "Database" },
  { name: "Pandas", cat: "Analysis" },
];

const row3 = [
  { name: "R", cat: "Statistics" },
  { name: "Tableau", cat: "Viz" },
  { name: "Power BI", cat: "Viz" },
  { name: "Keras", cat: "DL" },
  { name: "ResNet-50", cat: "CV" },
  { name: "ViT", cat: "CV" },
  { name: "LSTM", cat: "Seq Models" },
  { name: "RAG", cat: "GenAI" },
];

const TechPill = ({ name, cat }: { name: string; cat: string }) => (
  <div className="tech-pill">
    <div className="tech-pill-dot"></div>
    <span className="tech-pill-name">{name}</span>
    <span className="tech-pill-cat">{cat}</span>
  </div>
);

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
        <Marquee speed={35} gradient={false} className="marquee-row">
          {row1.map((t) => <TechPill key={t.name} {...t} />)}
        </Marquee>
        <Marquee speed={28} gradient={false} direction="right" className="marquee-row">
          {row2.map((t) => <TechPill key={t.name} {...t} />)}
        </Marquee>
        <Marquee speed={40} gradient={false} className="marquee-row">
          {row3.map((t) => <TechPill key={t.name} {...t} />)}
        </Marquee>
      </div>
    </section>
  );
};

export default TechStack;
