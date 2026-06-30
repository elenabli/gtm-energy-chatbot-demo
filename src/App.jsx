import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import FAQ from "./components/FAQ.jsx";
import ContactForm from "./components/ContactForm.jsx";

export default function App() {
  return (
    <div className="app">
      <header className="site-header">
        <a href="#top" className="logo" aria-label="Energy Chatbot Demo home">
          EnergyBot
        </a>
        <nav className="nav" aria-label="Main navigation">
          <a href="#features">Features</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <Hero />
        <Features />
        <FAQ />
        <ContactForm />
      </main>

      <footer className="footer">
        <p>Demo project: React landing page with Google Tag Manager event tracking.</p>
      </footer>
    </div>
  );
}
