import { pushToDataLayer } from "../gtm.js";

export default function Hero() {
  function handleStartDemo() {
    pushToDataLayer({
      event: "start_demo_click",
      section: "hero",
      button_text: "Start demo"
    });
  }

  function handleBrochureClick() {
    pushToDataLayer({
      event: "brochure_download_click",
      section: "hero",
      button_text: "Download brochure"
    });
  }

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="eyebrow">Energy customer support concept</p>
        <h1 id="hero-title">Smart chatbot support for energy customers</h1>
        <p className="hero-text">
          A lightweight chatbot concept that helps customers find answers about
          billing, electricity consumption, contracts, and technical issues.
        </p>
        <div className="button-row">
          <a href="#contact" className="button primary" onClick={handleStartDemo}>
            Start demo
          </a>
          <button className="button secondary" type="button" onClick={handleBrochureClick}>
            Download brochure
          </button>
        </div>
      </div>
      <div className="hero-card" aria-label="Example chatbot conversation">
        <p className="chat bot">How can I help with your energy account?</p>
        <p className="chat user">Why was my bill higher this month?</p>
        <p className="chat bot">
          I can check common reasons: consumption change, contract price, and invoice period.
        </p>
      </div>
    </section>
  );
}
