import { useEffect, useState } from "react";

const navLinks = ["Home", "About", "Services", "Invest", "Why Us", "Contact"];

const navHref = (link) => (link === "Home" ? "#" : `#${link.toLowerCase().replace(/\s+/g, "-")}`);
const assetPath = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

const services = [
  {
    icon: "real_estate_agent",
    title: "Property Sales",
    description:
      "Access premium residential and commercial properties in prime locations with flexible payment plans and secure transactions."
  },
  {
    icon: "travel_explore",
    title: "Property Purchase Advisory",
    description:
      "Get expert guidance on property selection, market research, valuation, and documentation before you commit."
  },
  {
    icon: "maps_home_work",
    title: "Property Management",
    description:
      "Enjoy hands-off ownership support, from tenant sourcing and rent collection to maintenance coordination."
  },
  {
    icon: "monitoring",
    title: "Real Estate Investment Consultancy",
    description:
      "Build smarter investment strategies with market insight, risk assessment, and portfolio diversification support."
  },
  {
    icon: "fact_check",
    title: "Land Documentation & Verification",
    description:
      "Secure ownership with verification checks and legal documentation support before and after acquisition."
  },
  {
    icon: "engineering",
    title: "Real Estate Development & Consultancy",
    description:
      "From site analysis to construction management, we help turn property visions into planned residential and commercial developments."
  }
];

const investmentSolutions = [
  {
    icon: "payments",
    title: "Flexible Payment Plans",
    description:
      "Structured acquisition options designed to help individuals and investors secure property without unnecessary pressure."
  },
  {
    icon: "verified_user",
    title: "Secure Transactions",
    description:
      "Clear transaction processes and documentation guidance help protect clients through each stage of acquisition."
  },
  {
    icon: "location_city",
    title: "Prime Location Strategy",
    description:
      "Estates and opportunities are selected around growth potential, accessibility, lifestyle quality, and long-term value."
  },
  {
    icon: "support_agent",
    title: "End-to-End Advisory",
    description:
      "From consultation to verification, acquisition, development, and management, clients receive coordinated support."
  }
];

const valueProps = [
  ["workspace_premium", "Industry Expertise", "Backed by market experience, we understand real estate opportunities and deliver high-value solutions."],
  ["handshake", "Integrity & Transparency", "We prioritize clear, secure, and ethical transactions in every client relationship."],
  ["person_heart", "Customer-Centric Approach", "Your goals guide the process, and our recommendations are tailored to your needs."],
  ["support_agent", "Reliable Support", "From consultation to acquisition and management, we provide practical end-to-end guidance."]
];

const processSteps = [
  ["forum", "Consult", "Discuss your goals, budget, location preferences, and investment timeline with an advisor."],
  ["query_stats", "Assess", "Review market fit, valuation, risk, documentation status, and expected long-term potential."],
  ["fact_check", "Verify", "Confirm ownership details, required documents, and transaction clarity before completion."],
  ["task_alt", "Support", "Move into acquisition, management, development, or portfolio support with ongoing guidance."]
];

const footerColumns = [
  {
    title: "Company",
    links: [
      ["About", "#about"],
      ["Services", "#services"],
      ["Invest", "#invest"],
      ["Why Us", "#why-us"],
      ["Contact", "#contact"]
    ]
  },
  {
    title: "Specialties",
    items: ["Buy and Build Properties", "Flexible Payment Plans", "Investment Consulting", "Property Management", "Commercial Real Estate"]
  }
];

function Icon({ children, className = "", filled = false }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={filled ? { fontVariationSettings: '"FILL" 1' } : undefined}
    >
      {children}
    </span>
  );
}

function RevealSection({ children, className = "", id }) {
  return (
    <section className={`transition-all duration-700 opacity-0 translate-y-10 ${className}`} data-reveal id={id}>
      {children}
    </section>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-surface/90 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/30 shadow-sm">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-3 sm:py-4 max-w-container-max mx-auto">
        <a className="inline-flex items-center gap-3 min-w-0" href="#" aria-label="Vertex City Ltd. home">
          <img className="h-10 w-10 sm:h-12 sm:w-12 object-contain shrink-0" src={assetPath("/images/logo.png")} alt="Vertex City Ltd." />
          <span className="text-lg sm:text-headline-md font-headline-md font-extrabold text-primary whitespace-nowrap">
            Vertex City Ltd.
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              className={
                index === 0
                  ? "text-primary font-bold border-b-2 border-primary pb-1 text-body-md font-body-md"
                  : "text-on-surface-variant hover:text-primary transition-colors text-body-md font-body-md"
              }
              href={navHref(link)}
              key={link}
            >
              {link}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a className="hidden md:inline-flex bg-primary text-on-primary px-4 sm:px-6 py-2 rounded-lg font-bold hover:bg-primary/90 transition-all text-body-md" href="#contact">
            Speak With an Advisor
          </a>
          <button
            className="inline-flex lg:hidden h-10 w-10 items-center justify-center rounded-lg border border-outline-variant/50 text-primary hover:bg-surface-container-low transition-colors"
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <Icon>{isMenuOpen ? "close" : "menu"}</Icon>
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        className={`lg:hidden border-t border-outline-variant/30 bg-surface/95 px-margin-mobile transition-all duration-300 ${
          isMenuOpen ? "max-h-[520px] opacity-100 py-4" : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-container-max flex-col gap-2">
          {navLinks.map((link) => (
            <a
              className="rounded-lg px-3 py-3 text-body-md font-bold text-primary hover:bg-surface-container-low transition-colors"
              href={navHref(link)}
              key={link}
              onClick={() => setIsMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-primary px-5 py-3 font-bold text-on-primary transition-colors hover:bg-primary/90"
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
          >
            Speak With an Advisor
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <RevealSection className="relative min-h-[520px] sm:min-h-[600px] flex items-center pt-6 sm:pt-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/65 to-primary/35 sm:bg-gradient-to-r sm:from-primary/75 sm:via-primary/45 sm:to-transparent z-10" />
        <img
          className="w-full h-full object-cover object-[62%_center] sm:object-center"
          src={assetPath("/images/vertexcity-draft-hero.png")}
          alt="Modern real estate development representing Vertex City Ltd. property solutions"
        />
      </div>
      <div className="relative z-20 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="max-w-3xl text-on-primary">
          <p className="text-xs sm:text-label-sm font-label-sm uppercase tracking-[0.12em] sm:tracking-[0.18em] text-secondary-container mb-3 sm:mb-4 max-w-[18rem] sm:max-w-none">
            Trusted Real Estate Investment & Property Solutions Partner
          </p>
          <h1 className="text-[2rem] sm:text-headline-lg-mobile md:text-display-xl font-display-xl mb-4 leading-tight max-w-[12ch] sm:max-w-none">
            Connecting You to Prime Land and Property Opportunities.
          </h1>
          <p className="text-base sm:text-body-lg font-body-lg mb-7 sm:mb-10 opacity-90 max-w-xl">
            Helping you invest in prime land and property with confidence, flexibility, and expert support.
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
            <a className="bg-primary text-on-primary px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-bold inline-flex items-center justify-center gap-2 hover:scale-[1.02] transition-all text-center" href="#services">
              Explore Our Services
              <Icon>arrow_forward</Icon>
            </a>
            <a className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-bold inline-flex items-center justify-center gap-2 hover:bg-white/20 transition-all text-center" href="#contact">
              <Icon>call</Icon>
              Speak With an Advisor
            </a>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

function Services() {
  return (
    <RevealSection id="services" className="py-14 md:py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-end mb-8 md:mb-10">
        <div>
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-primary">Our Services</h2>
          <p className="text-body-md font-body-md text-outline max-w-2xl">
            Strategic land, investment, documentation, management, and development support for individuals and investors.
          </p>
        </div>
        <a className="text-primary font-bold flex items-center gap-1 group" href="#contact">
          Speak With Us <Icon className="group-hover:translate-x-1 transition-transform">arrow_right_alt</Icon>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {services.map((service) => (
          <article className="bg-surface-container-low p-5 sm:p-6 rounded-lg group hover:bg-primary transition-all duration-300" key={service.title}>
            <Icon className="text-primary group-hover:text-on-primary text-3xl sm:text-4xl mb-4">{service.icon}</Icon>
            <h3 className="text-xl sm:text-headline-md font-headline-md text-primary group-hover:text-on-primary mb-3">{service.title}</h3>
            <p className="text-body-md text-on-surface-variant group-hover:text-on-primary/80">{service.description}</p>
          </article>
        ))}
      </div>
    </RevealSection>
  );
}

function InvestmentSolutions() {
  return (
    <RevealSection id="invest" className="bg-surface-container-lowest py-14 md:py-section-padding">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-12 items-start">
          <div>
            <p className="text-label-sm font-label-sm text-outline uppercase mb-3">Invest With Confidence</p>
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-primary mb-4">Investment & Property Solutions Built Around Trust</h2>
            <p className="text-base sm:text-body-lg font-body-lg text-outline">
              Our estates and opportunities are carefully selected in prime locations to support quality lifestyle, secure ownership, and long-term value.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
            {investmentSolutions.map((solution) => (
              <article className="bg-white rounded-lg p-5 sm:p-6 shadow-sm border border-outline-variant/20 hover:shadow-xl transition-all" key={solution.title}>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-5">
                  <Icon className="text-primary text-2xl sm:text-3xl">{solution.icon}</Icon>
                </div>
                <h3 className="text-xl sm:text-headline-md font-headline-md text-primary mb-3">{solution.title}</h3>
                <p className="text-body-md text-on-surface-variant">{solution.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

function WhyVertexCity() {
  return (
    <RevealSection id="why-us" className="py-14 md:py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-primary mb-4">Why Choose Vertex City Ltd.?</h2>
        <p className="text-base sm:text-body-lg font-body-lg text-outline max-w-2xl mx-auto">
          We do not just sell properties. We build trust, value, and long-term success through transparent guidance and reliable real estate support.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {valueProps.map(([icon, title, description]) => (
          <div className="p-5 sm:p-6 lg:p-8 bg-surface-container-low rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-all text-center" key={title}>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Icon className="text-primary text-2xl sm:text-3xl">{icon}</Icon>
            </div>
            <h3 className="text-xl sm:text-headline-md font-headline-md text-primary mb-3">{title}</h3>
            <p className="text-body-md text-on-surface-variant">{description}</p>
          </div>
        ))}
      </div>
    </RevealSection>
  );
}

function Process() {
  return (
    <RevealSection id="about" className="bg-surface py-14 md:py-section-padding overflow-hidden">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-primary mb-4">A Clear Path From Interest to Ownership</h2>
          <p className="text-base sm:text-body-lg font-body-lg text-outline max-w-2xl mx-auto">
            Our process keeps property decisions practical, transparent, and backed by the right documentation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
          {processSteps.map(([icon, title, description], index) => (
            <article className="bg-white p-5 sm:p-6 lg:p-8 rounded-lg shadow-sm border border-outline-variant/20" key={title}>
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <Icon className="text-primary text-3xl sm:text-4xl">{icon}</Icon>
                <span className="text-label-sm font-bold text-outline">0{index + 1}</span>
              </div>
              <h3 className="text-xl sm:text-headline-md font-headline-md text-primary mb-3">{title}</h3>
              <p className="text-body-md text-on-surface-variant">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

function ContactCta() {
  return (
    <RevealSection id="contact" className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-10 md:py-12">
      <div className="relative bg-primary rounded-xl md:rounded-[40px] overflow-hidden p-5 sm:p-8 md:p-20">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYW9dkkzFDFXZQxLaNAuaalBM6VUspOCmQxNPSN9IzEgUijWUV43nTKhKduR3f1ac6V1xRqWU5bhDH15rrcc3j9j3Ce5oXFAD91mMbhIGX5JKnlEugifE1rm1N1MMk-iaivvhT2keprUw5-4f-5U1Mr79hggN0DFA3rEo7bb6oHdEqjjTaYKowLXmAWN12HxklbLWinEloKYT5VXesLiF_ousWuaDA9LQWC0ntPYfb482FwlvTAzl45yKri3JcY--JtyncIwTc0gHb"
            alt="Luxury living room background"
          />
        </div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-[1.85rem] sm:text-headline-lg-mobile md:text-display-xl font-display-xl text-on-primary mb-4 sm:mb-6 leading-tight">Ready to Make a Confident Property Decision?</h2>
            <p className="text-base sm:text-body-lg font-body-lg text-on-primary/80">
              Speak with Vertex City Ltd. for property sales, purchase advisory, land verification, management, or investment consultancy.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a className="bg-secondary text-on-secondary px-6 sm:px-10 py-4 sm:py-5 rounded-lg sm:rounded-full font-bold hover:bg-secondary/90 transition-all shadow-xl text-center" href="tel:09044396835">
              Call 09044396835
            </a>
            <a className="bg-white/10 border border-white/20 text-on-primary px-6 sm:px-10 py-4 sm:py-5 rounded-lg sm:rounded-full font-bold hover:bg-white/20 transition-all text-center" href="#services">
              View Services
            </a>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

function Footer() {
  return (
    <footer className="bg-primary pt-12 md:pt-20 pb-8 md:pb-10 text-on-primary">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-gutter px-margin-mobile md:px-margin-desktop py-12 md:py-section-padding max-w-container-max mx-auto border-b border-on-primary/10 mb-8 md:mb-10">
        <div>
          <div className="mb-5 sm:mb-6 flex items-center gap-3 min-w-0">
            <span className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-lg bg-white">
              <img className="h-12 w-12 sm:h-14 sm:w-14 object-contain" src={assetPath("/images/logo.png")} alt="Vertex City Ltd." />
            </span>
            <span className="text-xl sm:text-headline-md font-headline-md font-bold text-on-primary">
              Vertex City Ltd.
            </span>
          </div>
          <p className="text-body-md opacity-70 mb-6 sm:mb-8 max-w-xs">
            We do not just sell properties. We build trust, value, and long-term success.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full border border-on-primary/20 flex items-center justify-center hover:bg-on-primary hover:text-primary transition-all" href="#contact" aria-label="Go to contact section">
              <Icon className="text-sm">call</Icon>
            </a>
            <a className="w-10 h-10 rounded-full border border-on-primary/20 flex items-center justify-center hover:bg-on-primary hover:text-primary transition-all" href="mailto:info@vertexcitylimited.com" aria-label="Email Vertex City Ltd.">
              <Icon className="text-sm">mail</Icon>
            </a>
          </div>
        </div>
        {footerColumns.map((column) => (
          <div key={column.title}>
            <h4 className="font-bold text-lg mb-6">{column.title}</h4>
            <ul className="space-y-4 opacity-70">
              {column.links?.map(([label, href]) => (
                <li key={label}>
                  <a className="hover:text-on-primary hover:opacity-100 transition-all" href={href}>
                    {label}
                  </a>
                </li>
              ))}
              {column.items?.map((item) => (
                <li key={item}>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h4 className="font-bold text-lg mb-6">Contact Us</h4>
          <ul className="space-y-4 opacity-70">
            <li className="flex gap-2 min-w-0">
              <Icon className="text-sm shrink-0">location_on</Icon>
              <span>Port-Harcourt, Rivers State</span>
            </li>
            <li className="flex gap-2 min-w-0">
              <Icon className="text-sm shrink-0">call</Icon>
              <a className="hover:text-on-primary hover:opacity-100 transition-all" href="tel:09044396835">
                09044396835
              </a>
            </li>
            <li className="flex gap-2 min-w-0">
              <Icon className="text-sm shrink-0">mail</Icon>
              <a className="min-w-0 break-all hover:text-on-primary hover:opacity-100 transition-all" href="mailto:info@vertexcitylimited.com">
                info@vertexcitylimited.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-3 md:gap-6 text-center md:text-left text-label-sm opacity-50">
        <p>{"\u00a9"} 2026 Vertex City Ltd. All rights reserved.</p>
        <p>Real estate investment and property solutions.</p>
      </div>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("[data-reveal]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-background text-on-background min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <InvestmentSolutions />
        <WhyVertexCity />
        <Process />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}
