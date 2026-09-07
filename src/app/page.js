import FaqAccordion from "@/components/FaqAccordion";
import TechnologyTabs from "@/components/TechnologyTabs";

const partnerLogos = [
  "/images/figma/partner-1.jpeg", "/images/figma/partner-2.png", "/images/figma/partner-3.png", "/images/figma/partner-4.png",
  "/images/figma/partner-5.jpeg", "/images/figma/partner-6.jpeg", "/images/figma/partner-7.jpeg", "/images/figma/partner-8.jpeg",
];

const companyPillars = [
  { icon: "⌘", title: "Product First", text: "We build software that solves real business problems for real people." },
  { icon: "⌁", title: "Service led", text: "From discovery to delivery, we work alongside you as one team." },
  { icon: "◈", title: "Innovation", text: "We explore what is possible, then turn the right ideas into products." },
  { icon: "◌", title: "Transparent", text: "Clear scope, fixed pricing, and direct access to the people doing the work." },
];

const services = [
  { title: "End to End Development", text: "From discovery and architecture to launch and support — we own the full build so you can stay focused on the business.", href: "/end-to-end-development" },
  { title: "Team Augmentation", text: "Embed vetted senior engineers directly into your team — aligned to your stack, your sprint cadence, and your culture.", href: "/team-augmentation" },
  { title: "MVP Service", text: "Get a lean, launch-ready product in weeks, not months — built to validate your idea with real users and real data." },
  { title: "Enterprise Solution", text: "Modernize legacy systems, integrate platforms, and build infrastructure that scales with strict security and compliance needs." },
];

const portfolioItems = [
  { className: "portfolio-card--featured", badge: "ATS", name: "ExpertATS", image: "/images/figma/portfolio-6.jpeg", description: "An Applicant Tracking System that streamlines hiring — from job postings and candidate pipelines to interview scheduling and offer management — all in one organized workflow.", link: "View ATS" },
  { className: "portfolio-card--half", badge: "POS", name: "ExpertPOS", image: "/images/figma/portfolio-4.png", description: "The leading POS software in Bangladesh, built for modern businesses with fast billing, intelligent inventory management, and real-time sales tracking. Trusted by 15 active businesses.", link: "View Expert POS" },
  { className: "portfolio-card--half", badge: "HRMS", name: "ExpertHRMS", image: "/images/figma/portfolio-2.png", description: "A Human Resource Management System that centralizes attendance, leave, payroll, and workforce records — giving managers real-time visibility and employees a single place to manage their HR needs.", link: "View Expert HRMS" },
];

const comparisonRows = [
  ["Business First", "We listen deeply before proposing a solution."],
  ["Built Around You", "Every solution is tailored to what your business needs."],
  ["Partners, Not Vendors", "We stay accountable long after the launch."],
  ["Engineering for Scale", "We build software that keeps working as you grow."],
];
const otherAgencyRows = ["Always ready to take shortcuts and oversell a project.", "One-size-fits-all templates and rushed delivery.", "Hand over the project after the invoice is paid.", "Quick fixes that break when you scale."];
const industries = [["Retail & Ecommerce", "cart"], ["Finance and Banking", "finance"], ["Healthcare", "health"], ["Logistics & Supply Chain", "logistics"], ["Education & EdTech", "education"], ["Real Estate & PropTech", "home"], ["Manufacturing", "manufacturing"], ["Early-Stage Startups", "startup"]];

function Arrow() { return <span className="inline-arrow" aria-hidden="true">→</span>; }

export default function Home() {
  return (
    <main id="top">
      <section className="hero-section">
        <div className="site-container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">Where Ideas Get Engineered</p>
            <h1 className="hero-title">Software, engineered<br /><span>byte by byte.</span></h1>
            <p className="hero-description">We specialize in smart engineering, intuitive design, and future-proof solutions for businesses that want to lead not follow. Whether you&apos;re building from scratch or rethinking what&apos;s possible, we turn complexity into clarity byte by byte.</p>
            <a className="primary-button hero-button" href="#contact">Book a Meeting</a>
          </div>
          <div className="hero-collage" aria-label="Byte Innovations team and product work">
            <div className="collage-top"><div className="image-card team-card"><img src="/images/hero-team.png" alt="Byte Innovations team collaborating" /></div><div className="collage-right"><div className="image-card jobs-card"><img src="/images/hero-jobs.png" alt="Applicant tracking dashboard" /></div><div className="collage-small-row"><div className="client-card"><div className="client-avatars" aria-hidden="true">{[1, 2, 3, 4].map((number) => <img key={number} src={`/images/client-${number}.png`} alt="" />)}</div><p>Happy Clients with Real Results</p></div><div className="image-card code-card"><img src="/images/hero-code.png" alt="Software development" /></div></div></div></div>
            <div className="collage-bottom"><div className="image-card dashboard-card"><img src="/images/hero-dashboard.png" alt="Business software dashboard" /></div><div className="image-card whiteboard-card"><img src="/images/hero-whiteboard.png" alt="Engineer planning on a whiteboard" /></div></div>
          </div>
        </div>
      </section>

      <section className="partners-section" aria-label="Trusted partners"><h2>Trusted by <span>50+ partners</span> globally</h2><div className="partners-marquee"><div className="partners-track">{[...partnerLogos, ...partnerLogos].map((src, index) => <img key={`${src}-${index}`} src={src} alt="Partner logo" />)}</div></div></section>

      <section className="company-section" id="company"><div className="site-container"><div className="company-intro"><div><p className="section-eyebrow">Company</p><h2 className="section-heading">We take ideas from a whiteboard sketch to a <span>product people pay for.</span></h2></div><div className="company-detail"><p>Byte Innovations partners with startups and enterprises to build scalable, maintainable software. Beyond client projects, we also develop and support our own products, including Expert POS and the Expert ERP suite.</p><a className="primary-button" href="#services">Explore Our Services</a></div></div><div className="company-pillars">{companyPillars.map((pillar, index) => <article className={`company-pillar company-pillar--${index + 1}`} key={pillar.title}><span>{pillar.icon}</span><div><h3>{pillar.title}</h3><p>{pillar.text}</p></div></article>)}</div></div></section>

      <section className="services-section" id="services"><div className="site-container"><SectionIntro eyebrow="Services" heading={<><span>Four</span> ways to work with us</>} text="Whether you need a full build, extra hands, a fast MVP, or enterprise-grade infrastructure — pick the engagement that matches where you are." /><div className="services-grid"><div className="services-stack">{services.slice(0, 2).map((service, index) => <ServiceCard key={service.title} number={index + 1} service={service} />)}</div><img className="services-feature-image" src="/images/hero-team.png" alt="Byte Innovations team collaborating" /><div className="services-stack">{services.slice(2).map((service, index) => <ServiceCard key={service.title} number={index + 3} service={service} />)}</div></div></div></section>

      <section className="mvp-section" id="mvp-calculator"><div className="site-container mvp-layout"><div><p className="section-eyebrow">Tool</p><h2 className="section-heading">Not sure what your <span>MVP costs</span>?</h2><p>Answer a few questions about your platform, features, and timeline — get an instant estimate of cost and build time before you talk to anyone.</p></div><a className="outline-button" href="/mvp-calculator">Open MVP Calculator</a></div></section>

      <section className="portfolio-section" id="products"><div className="site-container"><SectionIntro eyebrow="Our work" heading={<><span>Proof</span>, not promises</>} text="Real products we&apos;ve designed, built, and now maintain in production — plus the client work behind them." /><div className="portfolio-grid">{portfolioItems.map((item) => <article className={`portfolio-card ${item.className}`} key={item.name}><div className="portfolio-visual"><span className="portfolio-badge">{item.badge}</span><img src={item.image} alt={`${item.name} product interface`} /></div><h3>{item.name}</h3><p>{item.description}</p><a href="#products">{item.link}<Arrow /></a></article>)}</div></div></section>

      <section className="whyus-section" id="why-us"><div className="site-container"><SectionIntro eyebrow="Why byte innovations" heading={<span>Why Choose Us ?</span>} text="We don&apos;t just deliver technology — we deliver transformation. We take the time to listen, analyze, and tailor every solution to what actually moves your business forward." /><div className="comparison-grid"><div><h3>Byte Innovations</h3>{comparisonRows.map(([title, text]) => <article className="comparison-card comparison-card--good" key={title}><b>✓</b><p><strong>{title}</strong>{text}</p></article>)}</div><div><h3>Other Agencies</h3>{otherAgencyRows.map((text) => <article className="comparison-card comparison-card--bad" key={text}><b>×</b><p>{text}</p></article>)}</div></div></div></section>

      <section className="industries-section" id="industries"><div className="site-container"><SectionIntro eyebrow="Industries" heading={<>Built for the <span>industries</span> we understand</>} text="We focus on sectors where software directly moves the business — fewer industries, deeper expertise." /><div className="industries-grid">{industries.map(([industry, icon]) => <article key={industry}><span><IndustryIcon name={icon} /></span>{industry}</article>)}</div></div></section>

      <section className="faq-section" id="faq"><div className="site-container faq-layout"><div><p className="section-eyebrow">FAQ</p><h2 className="section-heading">Everything <span>You Need to Know</span></h2></div><FaqAccordion /></div></section>

      <section className="techstack-section" id="technology"><div className="site-container"><SectionIntro eyebrow="Technology" heading={<>The stack behind <span>every build</span></>} text="We choose technology based on what your product needs to do — not what&apos;s trending. Here&apos;s what we reach for most." /><TechnologyTabs /></div></section>

      <section className="build-section" id="contact"><div className="site-container build-layout"><p className="section-eyebrow">let&apos;s build</p><h2>Tell us what you&apos;re building. We&apos;ll tell you <span>how to ship it.</span></h2><p>Book a free 30-minute call with our engineering team — no sales script, just a straight answer on scope, timeline, and cost.</p><a className="primary-button" href="#contact">Book a Call</a></div></section>

      <section className="careers-section" id="career"><div className="site-container"><div className="careers-intro"><p className="section-eyebrow">Careers</p><h2>Engineers who&apos;d rather build than wait</h2><p>We&apos;re a small team that ships often, owns our own products, and gives every engineer real say in what gets built. If that sounds like your kind of place — we&apos;re hiring.</p></div><div className="careers-buttons"><a className="primary-button" href="#career">Explore Job Opening</a><a className="outline-button" href="#career">Submit your Profile</a></div><div className="careers-collage"><div className="careers-collage-column"><div className="career-pattern career-pattern--left" aria-hidden="true" /><img src="/images/hero-whiteboard.png" alt="Byte Innovations colleagues at work" /></div><img className="career-team-photo" src="/images/hero-team.png" alt="Byte Innovations team members" /><div className="careers-collage-column"><img src="/images/hero-team.png" alt="Byte Innovations team in discussion" /><div className="career-pattern career-pattern--right" aria-hidden="true" /></div></div></div></section>
    </main>
  );
}

function SectionIntro({ eyebrow, heading, text }) { return <div className="section-intro section-intro--center"><p className="section-eyebrow">{eyebrow}</p><h2 className="section-heading">{heading}</h2><p>{text}</p></div>; }
function ServiceCard({ number, service }) { return <article className="service-card"><div><span>{number}</span><h3>{service.title}</h3></div><p>{service.text}</p><a href={service.href || "#services"}>Explore the services <Arrow /></a></article>; }
function IndustryIcon({ name }) {
  const common = { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2.2 };
  const icons = {
    cart: <><path {...common} d="M3 4h2l2.2 11h9.6l2-8H6.5" /><circle {...common} cx="9" cy="19" r="1.4" /><circle {...common} cx="17" cy="19" r="1.4" /></>,
    finance: <><circle {...common} cx="12" cy="12" r="8" /><path {...common} d="M14.8 8.7c-.6-.6-1.6-1-2.8-1-1.8 0-3 1-3 2.4 0 3.4 6 1.7 6 4.9 0 1.4-1.2 2.4-3 2.4-1.2 0-2.3-.4-3-1M12 6v12" /></>,
    health: <path {...common} d="M10 4h4v6h6v4h-6v6h-4v-6H4v-4h6z" />,
    logistics: <><path {...common} d="M3 7h11v10H3zM14 10h3l3 3v4h-6z" /><circle {...common} cx="7" cy="19" r="1.5" /><circle {...common} cx="17" cy="19" r="1.5" /></>,
    education: <><path {...common} d="M4 5.5c2.8-.8 5.5-.2 8 1.8v11c-2.5-2-5.2-2.6-8-1.8zM20 5.5c-2.8-.8-5.5-.2-8 1.8v11c2.5-2 5.2-2.6 8-1.8z" /><path {...common} d="M12 7.3v11" /></>,
    home: <><path {...common} d="m3.5 11.2 8.5-7 8.5 7v8.3a1.5 1.5 0 0 1-1.5 1.5h-14a1.5 1.5 0 0 1-1.5-1.5z" /><path {...common} d="M9 21v-6h6v6" /></>,
    manufacturing: <><circle {...common} cx="12" cy="12" r="3" /><path {...common} d="M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3m15.4-6.4-1.6 1.6M7.2 16.8l-1.6 1.6m12.8 0-1.6-1.6M7.2 7.2 5.6 5.6" /><path {...common} d="m14.1 4.2.7-1.7 2.6 1.1-.3 1.8M19.8 9.9l1.7-.7 1.1 2.6-1.8.3M9.9 19.8l-.7 1.7-2.6-1.1.3-1.8M4.2 14.1l-1.7.7-1.1-2.6 1.8-.3" /></>,
    startup: <><rect {...common} x="4" y="7" width="16" height="12" rx="1.5" /><path {...common} d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M4 11h16M10 13h4" /></>,
  };

  return <svg viewBox="0 0 24 24" aria-hidden="true">{icons[name]}</svg>;
}
