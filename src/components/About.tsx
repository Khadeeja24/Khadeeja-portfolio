import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/About.css";

gsap.registerPlugin(ScrollTrigger);

const certs = [
  { icon: "IBM", name: "Data Analysis with Python", issuer: "IBM · Cognitive Class" },
  { icon: "IBM", name: "Machine Learning with Python", issuer: "IBM · Cognitive Class" },
  { icon: "KGL", name: "Python for Machine Learning", issuer: "Kaggle" },
  { icon: "MTS", name: "Python Fundamentals Meets AI", issuer: "Marine Tech Society, AMU" },
  { icon: "MTS", name: "Deep Dive into AI Workshop", issuer: "Marine Tech Society, AMU" },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.from(sectionRef.current.querySelectorAll(".about-heading, .about-text, .stat-item, .cert-item"), {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
    });
  }, []);

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="about-inner">
        <div className="about-left">
          <p className="title">About Me</p>
          <h2 className="about-heading">
            Building <em>intelligent</em>
            <br />systems that matter
          </h2>
          <p className="about-text">
            Data Science graduate student at Aligarh Muslim University with hands-on
            experience building machine learning systems, deep learning models, NLP
            pipelines, and GenAI agents. Currently a Research Intern at the Insight
            Centre for Data Analytics, University of Galway, developing multi-agent
            AI frameworks for skin disease diagnosis using VLMs, RAG, and memory-based
            reasoning. Comfortable working across the full stack — from raw data to
            deployed products.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-num">4+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">99%</div>
              <div className="stat-label">Best F1</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">5</div>
              <div className="stat-label">Certifications</div>
            </div>
          </div>
        </div>

        <div className="about-right">
          <p className="about-certs-title">Certifications</p>
          <div className="about-certs">
            {certs.map((cert, i) => (
              <div className="cert-item" key={i}>
                <div className="cert-icon">{cert.icon}</div>
                <div className="cert-info">
                  <div className="cert-name">{cert.name}</div>
                  <div className="cert-issuer">{cert.issuer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
