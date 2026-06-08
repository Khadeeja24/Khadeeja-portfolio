import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const socials = [
  { label: "GitHub", href: "https://github.com/khadeejafaizan024" },
  { label: "LinkedIn", href: "https://linkedin.com/in/khadeejafaizan" },
  { label: "HuggingFace", href: "https://huggingface.co" },
];

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <p className="title">Get in Touch</p>
        <h2 className="contact-heading">
          Let's<br /><span>Connect</span>
        </h2>
        <p className="contact-sub">
          Open to research collaborations, ML engineering roles, and
          interesting projects in AI and data science.
        </p>

        <div className="contact-grid">
          <div>
            <p className="contact-col-title">Direct</p>
            <a href="mailto:khadeejafaizan024@gmail.com" className="contact-link-item">
              <span>khadeejafaizan024@gmail.com</span>
              <MdArrowOutward className="contact-link-arrow" />
            </a>
            <a href="tel:+917302836966" className="contact-link-item">
              <span>+91 7302 836 966</span>
              <MdArrowOutward className="contact-link-arrow" />
            </a>
          </div>

          <div>
            <p className="contact-col-title">Social</p>
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener" className="contact-link-item">
                <span>{s.label}</span>
                <MdArrowOutward className="contact-link-arrow" />
              </a>
            ))}
          </div>
        </div>

        <div className="contact-big-email">
          <a href="mailto:khadeejafaizan024@gmail.com">
            khadeejafaizan024@gmail.com
          </a>
        </div>

        <div className="contact-footer">
          <p className="contact-footer-copy">
            <MdCopyright style={{ verticalAlign: "middle" }} /> 2026 Khadeeja Faizan
          </p>
          <p className="contact-footer-credit">
            Designed & Built with <span>♥</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
