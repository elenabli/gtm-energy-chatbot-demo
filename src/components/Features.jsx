const features = [
  {
    title: "Billing guidance",
    description: "Helps users understand invoices, payment dates, and common billing changes."
  },
  {
    title: "Consumption insights",
    description: "Explains energy usage patterns in simple language for non-technical customers."
  },
  {
    title: "Technical support",
    description: "Guides customers through basic issue reporting before escalation to support."
  }
];

export default function Features() {
  return (
    <section className="section" id="features" aria-labelledby="features-title">
      <div className="section-heading">
        <p className="eyebrow">Core use cases</p>
        <h2 id="features-title">Designed for common energy-service questions</h2>
      </div>
      <div className="feature-grid">
        {features.map((feature) => (
          <article className="feature-card" key={feature.title}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
