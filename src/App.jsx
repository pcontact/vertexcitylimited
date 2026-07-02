import { useEffect } from "react";

const navLinks = ["Home", "Buy", "Rent", "Sell", "Agents", "Contact"];

const heroAgents = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCuNCbyE0kqt-CixrkmZxaUdFQuia4aN22xru_si7HTvv_JbiMQHjtRx23ogvGQt5FICZLe7crNYbRBsbCSPBKGTGm2OruoNEwcJdC3PySL_NPCqsn4Nmd6496oS82KmJCRDYnD-Ein-pp0Xa6UW8HthnfyrbWk7jHawcrM9nLkM12VrAyOR-sEz4uK0vaJ6Y_xNf0m-Q0SDCAshAZ-dEynpQnxb46XTiU-XzrIpmH4pbcv_LfJe8-G_geNiCwAUBACRtnYitYBsKQ3",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDJvNlxeN44RwWVhT1yoW_3m05Hvs7PK6MMqhsaK7-zNV8nF5_kREM8BD38WPc_c7C32xIPRPUfvaMqDLCNzp9hUtb3WDfWV5IgBm8riYn4nDa-8wAb-4wj7NpI9Dc90mo5sfVT4yXbz-2u171xRvrc5xtg8wgPeb8f2hwsVtEIzAwqJcrEEGtf_rSfsGHXvK4trMsCEyu4BPLEII3MX9bQ3_3TU3_vh-gbAMUbZHBRKd_MZP3l6QLU4_k-Aq94Vlz2Zcs7WMZ_hlRf",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDiKwhSNw3ip_wfgwVFVODCqZC44z0Rf9B1ReV86250uLl1RA40ydSd6KJBbhcmA_uhS9h7gUPY_eRAm0gJ9lUF8n7rAkESipM-DQWxHjnOu8SHKIY-VTlSm57gaveuSBeAhohgVfY1caYgSBORbTmO0yC7S7l6p-h8pK5UqSD22nSgTc8OUE_wlpRBiJhtzNTyEgo5OQvUJoW9rVBzUz8aoTZNahvkfBLCk-zP9hGZpjiEmWmWk3nJQiY5WvnibylMVFas5lH24oQK"
];

const propertyTypes = [
  ["apartment", "Apartments", "1,245 Listings"],
  ["home", "Houses", "2,345 Listings"],
  ["villa", "Villas", "856 Listings"],
  ["domain", "Condos", "1,032 Listings"],
  ["house_siding", "Townhouses", "645 Listings"],
  ["landscape", "Land", "321 Listings"]
];

const featuredProperties = [
  {
    title: "Luxury Villa in Miami",
    location: "Miami, FL",
    price: "$3,250,000",
    status: "For Sale",
    statusClass: "bg-primary text-on-primary",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBxEnPNtoxFJNuYGNpiVlaP6TaSJKBq7gDq8HKUjrbKrjGzN7gtYSsEu0i9bDoPvUC-sVASvYuHfDLjxQDddlmUvw-8ltcMGW9eKQ7S3RCoda3WYFoYOev1KvpBq1mgVp2_BvioMaCHXcfhlVbThr2sfi842pUicwzpF-fSUF5pdrpAa32bb8BSAzGI_y94rSKA1QvO88EajkswyObqVM5S1bQZio1WP1Rd31G60PGfBT8zvUj8Syxr4e90su07w9SlvIVxZ_peGi9A",
    facts: ["4 Beds", "5 Baths", "3,200 sqft"]
  },
  {
    title: "Modern Apartment",
    location: "New York, NY",
    price: "$4,500",
    suffix: "/mo",
    status: "For Rent",
    statusClass: "bg-secondary text-on-secondary",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBhKfKjQPO3DZKi5F9BFyjNPlW3krxHr7oUKcdnLi9H3L2KoyWfxnZYx9hkz0CMpddFxeLG8jKAMjwRWHWSgqaOWW97XIyphk1eTWbiJFVJohC4ebyB8nTBFbapRm2vacga3ngQUqTKZQhyOJU0f3CtLkePIXpNcM10UE8Vtp6pHquEUmOC4saGSbP0_uMhlhBqQ-joqIlLH8g0KBahPW78NJlV0jEwbbeB5nZsrwhCR9uKRfIwIbSC3eA3jx5J2inlCTITS3-BP9XG",
    facts: ["2 Beds", "2 Baths", "1,250 sqft"]
  },
  {
    title: "Family House in Austin",
    location: "Austin, TX",
    price: "$980,000",
    status: "For Sale",
    statusClass: "bg-primary text-on-primary",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAAtOA9jyHA-ltEc4r2Q1rqYJpCCyBnfiYAWJga-JF8uNV8W8z-eIQj6qwYep-H3R0ki_T1ab3TEDyikcMpKvc_3mU9Uix1gUyieJpXD2SK-NTFE8OaBynGdmGP7lDVqOpmM0Nfe1HRcIlOk9eOeRQdYoox_x_gAssDNwZe1U6h9lKSBvTkwBdWLkXrIMtkzioaKdZVitDZNE2gCJVw8VMNcQMqNqBqXwLfrSm-mSCpZjbcJHjBCa65HOvt3cq1e6dsJq53Zmdc9w-9",
    facts: ["3 Beds", "2 Baths", "2,100 sqft"]
  }
];

const valueProps = [
  ["verified", "Verified Listings", "Every property on our platform undergoes a rigorous 50-point verification process."],
  ["payments", "Best Price", "Our market analysis tools ensure you get the absolute best value for your investment."],
  ["support_agent", "Expert Agents", "Our top 1% agents are available 24/7 to guide you through complex transactions."],
  ["task_alt", "Easy Process", "From viewing to closing, we've digitized the entire journey for maximum speed."]
];

const testimonials = [
  {
    quote:
      "VertexCity made finding our dream home so easy. The team was professional, helpful, and always available to answer our questions.",
    name: "Emily Johnson",
    city: "New York, NY",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAT5vOzYA_ZMw8eCTdKQFYRrVC4FaNKQZwouF2IjJl3eNMd_1EYdNqK1HESnNp2vdP_LL0NKNc3oldZhd3qqmOkiWSsPmOgpyhNFCwrgu-HRU6_8ikWyhXtk9B6m8IFoAEkev4vtjKY1kjEPWQHSzn93iBebBP-eE8fMAeZ8-OBsKj2ZhiZrrfoxaIZZu89ZuaNP7HSY4v9Pt3Cys1KFblechfBNHs9Rz6Z10j1CwfS2qcQ2aKoGcuU84x_NmTG5IDLpRLdsDnWu1hQ"
  },
  {
    quote:
      "The best real estate experience I've ever had. Highly recommend VertexCity to anyone looking to buy or rent high-end property.",
    name: "Michael Brown",
    city: "Austin, TX",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCRSoRjNvwddrlYOFSWj0-p8DXuheiQ_mcno4nXxjMJ2CwOx0U8dSzbsO7VeXQVBYksL9PkSWD5UssvxnXl4HDkE3v8OmPVkP6rekSYuXfuVRtUCU9x2ZpLJScJK-9co7SyfHg_WvJbtwk0haVkm_mGOeEAEJM_hXPdZbIyvBtqj8qs_IFRvrMBaF0588dHkUS5FLdB-ixnfknRqvuiY11ne2jQch65xj0E3JJiCdHXdqOD7w2-Sa6Udd1cvEZiHQf-QCr7nDC8UIWK"
  },
  {
    quote:
      "I sold my property in record time with VertexCity. Their marketing and support were outstanding throughout the whole process!",
    name: "Sophia Martinez",
    city: "Miami, FL",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCppZo5OQmt5hK7VnUPp2Tw1VWsZcmzdYduvQEyt_HaqlYlNZG9CHY4I0lCdWRgZdb4t8a00_KSYcKniPyT77CFozoxTIhqj6T3irK983i__N8T0E-80afRJGLlATHW3Iq199kMRpJMPX81KBDUycsMFgjoHUMeCwTRYEt-1qe0fdh3Env67E3Bl7-9N3_-VXTJ4YRYMIWqLSsP4aAELEMn4rgqxCOnp8aQ-F075x65ENkVXCsXhQJi4LcSvgcMjdpaT_2rejTVgonj"
  }
];

const footerColumns = [
  ["Quick Links", ["Home", "Buy", "Rent", "Sell", "Agents"]],
  ["Property Types", ["Apartments", "Houses", "Villas", "Condos", "Land"]]
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

function RevealSection({ children, className = "" }) {
  return (
    <section className={`transition-all duration-700 opacity-0 translate-y-10 ${className}`} data-reveal>
      {children}
    </section>
  );
}

function Header() {
  return (
    <header className="bg-surface/90 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/30 shadow-sm">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <a className="inline-flex items-center gap-3" href="#" aria-label="Vertex City Ltd home">
          <img className="h-12 w-12 object-contain" src="/images/logo.png" alt="VertexCity" />
          <span className="text-headline-md font-headline-md font-extrabold text-primary whitespace-nowrap">
            Vertex City Ltd
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              className={
                index === 0
                  ? "text-primary font-bold border-b-2 border-primary pb-1 text-body-md font-body-md"
                  : "text-on-surface-variant hover:text-primary transition-colors text-body-md font-body-md"
              }
              href="#"
              key={link}
            >
              {link}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex gap-2">
            <button className="p-2 hover:bg-secondary-container/20 rounded-full transition-all duration-300" type="button" aria-label="Favorites">
              <Icon className="text-on-surface">favorite</Icon>
            </button>
            <button className="p-2 hover:bg-secondary-container/20 rounded-full transition-all duration-300" type="button" aria-label="Profile">
              <Icon className="text-on-surface">person</Icon>
            </button>
          </div>
          <button className="bg-primary text-on-primary px-4 sm:px-6 py-2 rounded-lg font-bold hover:bg-primary/90 transition-all text-body-md" type="button">
            List Your Property
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <RevealSection className="relative min-h-[870px] flex items-center pt-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent z-10" />
        <img
          className="w-full h-full object-cover"
          src="/images/vertexcity-draft-hero.png"
          alt="Modern luxury home with glass walls and an infinity pool at twilight"
        />
      </div>
      <div className="relative z-20 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="max-w-2xl text-on-primary">
          <h1 className="text-headline-lg-mobile md:text-display-xl font-display-xl mb-4 leading-tight">
            Find Your Future Home with VertexCity
          </h1>
          <p className="text-body-lg font-body-lg mb-10 opacity-90">
            Explore thousands of verified premium properties and find a place you'll love to call home. Our concierge-level service ensures a seamless journey.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <button className="bg-primary text-on-primary px-8 py-4 rounded-lg font-bold flex items-center gap-2 hover:scale-105 transition-all" type="button">
              Explore Properties
              <Icon>arrow_forward</Icon>
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 hover:bg-white/20 transition-all" type="button">
              <Icon>play_circle</Icon>
              How It Works
            </button>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-4">
              {heroAgents.map((src) => (
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src={src} alt="VertexCity real estate agent" key={src} />
              ))}
            </div>
            <span className="text-body-md font-body-md">Trusted by 10,000+ happy clients</span>
          </div>
        </div>
        <SearchPanel />
      </div>
    </RevealSection>
  );
}

function SearchPanel() {
  return (
    <div className="mt-20 glass-panel p-6 md:p-8 rounded-2xl shadow-2xl max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-end">
        <div>
          <label className="block text-label-sm font-label-sm text-outline mb-2" htmlFor="location">
            Location
          </label>
          <div className="relative">
            <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-outline">location_on</Icon>
            <input id="location" className="w-full pl-10 pr-4 py-3 bg-surface-container rounded-lg border-none focus:ring-2 focus:ring-primary text-body-md" placeholder="Enter location" type="text" />
          </div>
        </div>
        {[
          ["Property Type", ["Any Type", "Apartment", "House", "Villa"]],
          ["Price Range", ["$0 - $5,000,000+", "$500k - $1M", "$1M - $5M"]],
          ["Beds", ["Any", "1+", "3+", "5+"]]
        ].map(([label, options]) => (
          <div key={label}>
            <label className="block text-label-sm font-label-sm text-outline mb-2">{label}</label>
            <select className="w-full px-4 py-3 bg-surface-container rounded-lg border-none focus:ring-2 focus:ring-primary text-body-md appearance-none">
              {options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
        ))}
        <button className="bg-primary text-on-primary w-full py-4 rounded-lg font-bold flex justify-center items-center gap-2 hover:bg-primary/90 transition-all shadow-lg" type="button">
          <Icon>search</Icon>
          Search
        </button>
      </div>
    </div>
  );
}

function PropertyTypes() {
  return (
    <RevealSection className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-end mb-10">
        <div>
          <h2 className="text-headline-lg font-headline-lg text-primary">Explore Property Types</h2>
          <p className="text-body-md font-body-md text-outline">Find exactly what you're looking for across our diverse portfolio</p>
        </div>
        <a className="text-primary font-bold flex items-center gap-1 group" href="#">
          View All <Icon className="group-hover:translate-x-1 transition-transform">arrow_right_alt</Icon>
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-gutter">
        {propertyTypes.map(([icon, title, count]) => (
          <div className="bg-surface-container-low p-6 rounded-xl text-center group hover:bg-primary transition-all duration-300 cursor-pointer" key={title}>
            <Icon className="text-primary group-hover:text-on-primary text-4xl mb-3">{icon}</Icon>
            <h3 className="font-bold text-primary group-hover:text-on-primary">{title}</h3>
            <p className="text-label-sm text-outline group-hover:text-on-primary/80">{count}</p>
          </div>
        ))}
      </div>
    </RevealSection>
  );
}

function FeaturedProperties() {
  return (
    <RevealSection className="bg-surface-container-lowest py-section-padding">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-headline-lg font-headline-lg text-primary">Featured Properties</h2>
            <p className="text-body-md font-body-md text-outline">Exclusive listings curated by our top-tier agents</p>
          </div>
          <div className="hidden sm:flex gap-4">
            <button className="p-3 border border-outline-variant rounded-full hover:bg-primary hover:text-on-primary transition-all" type="button" aria-label="Previous properties">
              <Icon>chevron_left</Icon>
            </button>
            <button className="p-3 bg-primary text-on-primary rounded-full shadow-lg hover:scale-105 transition-all" type="button" aria-label="Next properties">
              <Icon>chevron_right</Icon>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group" key={property.title}>
              <div className="relative h-64">
                <img className="w-full h-full object-cover" src={property.image} alt={property.title} />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`${property.statusClass} px-3 py-1 rounded text-label-sm font-bold uppercase`}>{property.status}</span>
                </div>
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur rounded-full text-primary hover:bg-white transition-all" type="button" aria-label={`Save ${property.title}`}>
                  <Icon>favorite</Icon>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-headline-md font-headline-md text-primary mb-2">{property.title}</h3>
                <div className="flex items-center gap-1 text-outline mb-4">
                  <Icon className="text-sm">location_on</Icon>
                  <span className="text-body-md">{property.location}</span>
                </div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-headline-md text-secondary font-bold">
                    {property.price} {property.suffix && <span className="text-label-sm font-normal text-outline">{property.suffix}</span>}
                  </span>
                </div>
                <div className="flex border-t border-outline-variant/30 pt-4 justify-between text-outline text-label-sm">
                  {property.facts.map((fact, index) => (
                    <div className="flex items-center gap-1" key={fact}>
                      <Icon>{["bed", "bathtub", "square_foot"][index]}</Icon> {fact}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

function WhyVertexCity() {
  return (
    <RevealSection className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-headline-lg font-headline-lg text-primary mb-4">Why Choose VertexCity?</h2>
        <p className="text-body-lg font-body-lg text-outline max-w-2xl mx-auto">
          We redefine the real estate experience with a focus on trust, transparency, and expert guidance at every step.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {valueProps.map(([icon, title, description]) => (
          <div className="p-8 bg-surface-container-low rounded-2xl border border-outline-variant/10 hover:border-primary/30 transition-all text-center" key={title}>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon className="text-primary text-3xl">{icon}</Icon>
            </div>
            <h3 className="text-headline-md font-headline-md text-primary mb-3">{title}</h3>
            <p className="text-body-md text-on-surface-variant">{description}</p>
          </div>
        ))}
      </div>
    </RevealSection>
  );
}

function Testimonials() {
  return (
    <RevealSection className="bg-surface py-section-padding overflow-hidden">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <h2 className="text-headline-lg font-headline-lg text-primary text-center mb-16">Client Stories</h2>
        <div className="flex gap-gutter overflow-x-auto hide-scrollbar pb-8">
          {testimonials.map((testimonial) => (
            <article className="min-w-[min(400px,calc(100vw-40px))] bg-white p-8 rounded-3xl shadow-sm border border-outline-variant/20" key={testimonial.name}>
              <div className="flex text-secondary-container mb-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Icon filled key={index}>
                    star
                  </Icon>
                ))}
              </div>
              <p className="text-body-lg font-body-lg text-on-surface mb-8 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img className="w-12 h-12 rounded-full object-cover" src={testimonial.image} alt={testimonial.name} />
                <div>
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  <p className="text-label-sm text-outline">{testimonial.city}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

function Newsletter() {
  return (
    <RevealSection className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-12">
      <div className="relative bg-primary rounded-[40px] overflow-hidden p-8 md:p-20">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYW9dkkzFDFXZQxLaNAuaalBM6VUspOCmQxNPSN9IzEgUijWUV43nTKhKduR3f1ac6V1xRqWU5bhDH15rrcc3j9j3Ce5oXFAD91mMbhIGX5JKnlEugifE1rm1N1MMk-iaivvhT2keprUw5-4f-5U1Mr79hggN0DFA3rEo7bb6oHdEqjjTaYKowLXmAWN12HxklbLWinEloKYT5VXesLiF_ousWuaDA9LQWC0ntPYfb482FwlvTAzl45yKri3JcY--JtyncIwTc0gHb"
            alt="Luxury living room background"
          />
        </div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-headline-lg-mobile md:text-display-xl font-display-xl text-on-primary mb-6">Get Exclusive Property Updates</h2>
            <p className="text-body-lg font-body-lg text-on-primary/80">
              Subscribe to our newsletter and be the first to know about new listings, market trends, and special offers from VertexCity.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <input className="flex-grow px-8 py-5 rounded-full border-none focus:ring-4 focus:ring-primary-container text-primary text-body-md font-body-md" placeholder="Enter your email address" type="email" />
            <button className="bg-secondary text-on-secondary px-10 py-5 rounded-full font-bold hover:bg-secondary/90 transition-all whitespace-nowrap shadow-xl" type="button">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

function Footer() {
  return (
    <footer className="bg-primary pt-20 pb-10 text-on-primary">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-section-padding max-w-container-max mx-auto border-b border-on-primary/10 mb-10">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-16 w-16 items-center justify-center rounded-lg bg-white">
              <img className="h-14 w-14 object-contain" src="/images/logo.png" alt="Vertex City Ltd" />
            </span>
            <span className="text-headline-md font-headline-md font-bold text-on-primary">
              Vertex City Ltd
            </span>
          </div>
          <p className="text-body-md opacity-70 mb-8 max-w-xs">
            Your trusted partner in finding the perfect property. We bring luxury and efficiency to your real estate journey.
          </p>
          <div className="flex gap-4">
            {["face_nod", "alternate_email", "share"].map((icon) => (
              <a className="w-10 h-10 rounded-full border border-on-primary/20 flex items-center justify-center hover:bg-on-primary hover:text-primary transition-all" href="#" key={icon}>
                <Icon className="text-sm">{icon}</Icon>
              </a>
            ))}
          </div>
        </div>
        {footerColumns.map(([title, links]) => (
          <div key={title}>
            <h4 className="font-bold text-lg mb-6">{title}</h4>
            <ul className="space-y-4 opacity-70">
              {links.map((link) => (
                <li key={link}>
                  <a className="hover:text-on-primary hover:opacity-100 transition-all" href="#">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h4 className="font-bold text-lg mb-6">Contact Us</h4>
          <ul className="space-y-4 opacity-70">
            <li className="flex gap-2">
              <Icon className="text-sm">location_on</Icon> 123 Dream Street, New York, NY 10001
            </li>
            <li className="flex gap-2">
              <Icon className="text-sm">call</Icon> +1 (800) 123-4567
            </li>
            <li className="flex gap-2">
              <Icon className="text-sm">mail</Icon> info@vertexcity.com
            </li>
          </ul>
        </div>
      </div>
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-label-sm opacity-50">
        <p>{"\u00a9"} 2024 VertexCity. All rights reserved.</p>
        <div className="flex gap-8">
          {["Privacy Policy", "Terms of Service", "FAQ"].map((link) => (
            <a className="hover:underline" href="#" key={link}>
              {link}
            </a>
          ))}
        </div>
        <p>
          Designed with <span className="text-red-500">{"\u2665"}</span> for your dream home
        </p>
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
    <div className="bg-background text-on-background min-h-screen">
      <Header />
      <main>
        <Hero />
        <PropertyTypes />
        <FeaturedProperties />
        <WhyVertexCity />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
