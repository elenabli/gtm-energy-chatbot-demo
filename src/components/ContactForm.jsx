import { useState } from "react";
import { pushToDataLayer } from "../gtm.js";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    pushToDataLayer({
      event: "demo_request_submit",
      section: "contact",
      form_name: "demo_request_form"
    });

    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="section-heading">
        <p className="eyebrow">Demo request</p>
        <h2 id="contact-title">Request a product demo</h2>
        <p>
          This form does not send data to a backend. It is included to demonstrate form handling
          and GTM event tracking.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" placeholder="Your name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="you@example.com" required />
        </label>
        <label>
          Topic
          <select name="topic" defaultValue="billing">
            <option value="billing">Billing support</option>
            <option value="consumption">Consumption insights</option>
            <option value="technical">Technical support</option>
          </select>
        </label>
        <button className="button primary full-width" type="submit">
          Submit request
        </button>
      </form>

      {submitted && (
        <p className="success-message" role="status">
          Demo request submitted. The GTM form event has been pushed to the data layer.
        </p>
      )}
    </section>
  );
}
