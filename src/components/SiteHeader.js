"use client";

import { useState } from "react";

const navItems = [
  { label: "Company", href: "#company" },
  { label: "MVP Calculator", href: "#mvp-calculator" },
  {
    label: "Services",
    href: "#services",
    menuType: "services",
    mega: {
      cards: [
        { title: "End to End Development", description: "Idea to launched product, fully built and owned by us." },
        { title: "Team Augmentation", description: "A full dev team set up alongside yours in days." },
        { title: "MVP Service", description: "Idea to live product in weeks, not months." },
        { title: "AI & Machine Learning", description: "AI and machine learning solutions tailored to your business needs." },
        { title: "Enterprise Solution", description: "Zero downtime. Zero compromise. Built to scale." },
      ],
      columns: [
        { heading: "End to End Development Service", links: ["Custom Software Development", "Web Application Development", "Mobile App Development", "SaaS Product Development", "Cloud & DevOps", "QA & Testing Services"] },
        { heading: "Team Augmentation", links: ["About Team Augmentation", "Benefits of Staff Augmentation", "Partnership Models", "How Our Staff Augmentation Works"] },
        { heading: "MVP Service", links: ["Product Strategy & Discovery", "UX/UI Design", "Rapid Prototyping", "Product Scaling Support", "Fractional CTO", "Dedicated Product Team", "Digital Product Development"] },
        { heading: "AI & Machine Learning", links: ["AI Strategy Development", "AI Agent Development", "AI Product Development", "Conversational AI", "RAG AI Development", "Data & LLM Engineering"] },
        { heading: "Enterprise Solutions", links: ["Digital Transformation", "Business Intelligence & Automation", "CRM & ERP Implementation", "Legacy System Modernization", "VAPT Service / Cybersecurity", "IT Audit", "RPA & Workflow Automation", "Cloud-First Transformation"] },
      ],
      links: [
        { label: "End to End Development" },
        { label: "Team Augmentation" },
        { label: "MVP Service" },
        { label: "AI & Machine Learning" },
        { label: "Enterprise Solution" },
      ],
      cta: { label: "Book a call Now", href: "#contact" },
    },
  },
  {
    label: "Products",
    href: "#products",
    menuType: "products",
    mega: {
      columns: [
        { heading: "Expert POS", links: ["Dashboard", "Sale", "Stocks", "Report"] },
        { heading: "Expert HRMS", links: ["Attendance & Leave Management", "Payroll Processing", "Partnership Models", "Performance Tracking"] },
        { heading: "Expert ATS", links: ["Job Postings & Pipelines", "Candidate Screening", "Interview Scheduling", "Offer Management"] },
      ],
      links: [
        { label: "Expert POS" },
        { label: "Expert HRMS" },
        { label: "Expert ATS" },
      ],
      cta: { label: "Book a call Now", href: "#contact" },
    },
  },
  {
    label: "Career",
    href: "#career",
    menuType: "career",
    mega: {
      links: [
        { label: "Why Join Us?" },
        { label: "Explore Job Openings" },
        { label: "Submit your CV" },
      ],
    },
  },
  { label: "Contact Us", href: "#contact" },
];

function MenuLinks({ links, href, compact = false }) {
  return (
    <ul className={`mega-list${compact ? " mega-list--compact" : ""}`}>
      {links.map((link) => {
        const item = typeof link === "string" ? { label: link } : link;

        return (
        <li key={item.label}>
          <a href={href}>
            <span className="mega-link-label">{item.label}</span>
            {!compact && item.description ? <span className="mega-link-description">{item.description}</span> : null}
          </a>
        </li>
        );
      })}
    </ul>
  );
}

function DesktopDropdown({ item }) {
  const { mega, menuType } = item;

  if (menuType === "career") {
    return (
      <div className="mega-panel mega-panel--career">
        <MenuLinks links={mega.links} href={item.href} compact />
      </div>
    );
  }

  if (menuType === "products") {
    return (
      <div className="mega-panel mega-panel--products">
        <div className="mega-products-main">
          {mega.columns.map((column) => (
            <section className="mega-column" key={column.heading}>
              <p className="mega-heading">{column.heading}</p>
              <MenuLinks links={column.links} href={item.href} compact />
            </section>
          ))}
        </div>
        <div className="mega-footer">
          <a className="mega-cta" href={mega.cta.href}>{mega.cta.label}</a>
        </div>
      </div>
    );
  }

  return (
    <div className="mega-panel mega-panel--services">
      <div className="mega-services-top">
        <p className="mega-services-label">Engagement Models</p>
        <div className="mega-service-cards">
          {mega.cards.map((card) => (
            <article className="mega-service-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="mega-services-bottom">
        {mega.columns.map((column) => (
          <section className="mega-column" key={column.heading}>
            <p className="mega-heading">{column.heading}</p>
            <MenuLinks links={column.links} href={item.href} compact />
          </section>
        ))}
      </div>
      <div className="mega-footer">
        <a className="mega-cta" href={mega.cta.href}>{mega.cta.label}</a>
      </div>
    </div>
  );
}

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (label) => {
    setOpenSubmenu((current) => (current === label ? null : label));
  };

  return (
    <header className="site-header">
      <div className="site-container nav-layout">
        <a className="brand" href="#top" aria-label="Byte Innovations home">
          <img src="/images/byte-logo-dark.png" alt="Byte Innovations" />
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <div className={`nav-item${item.mega ? " has-dropdown" : ""}`} key={item.label}>
              <a className="nav-link" href={item.href}>
                {item.label}
                {item.mega ? (
                  <span className="chevron" aria-hidden="true">
                    <img src="/images/nav-chevron.svg" alt="" width={16} height={16} />
                  </span>
                ) : null}
              </a>

              {item.mega ? (
                <DesktopDropdown item={item} />
              ) : null}
            </div>
          ))}
        </nav>

        <a className="primary-button nav-button desktop-only" href="#contact">
          Start a Project
        </a>

        <button
          type="button"
          className={`mobile-toggle${mobileOpen ? " is-open" : ""}`}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-nav${mobileOpen ? " is-open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <div className="mobile-nav-item" key={item.label}>
              <div className="mobile-nav-row">
                <a
                  className="mobile-nav-link"
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
                {item.mega ? (
                  <button
                    type="button"
                    className={`mobile-submenu-toggle${openSubmenu === item.label ? " is-open" : ""}`}
                    aria-label={`Toggle ${item.label} submenu`}
                    onClick={() => toggleSubmenu(item.label)}
                  >
                    <img src="/images/nav-chevron.svg" alt="" width={18} height={18} />
                  </button>
                ) : null}
              </div>

              {item.mega ? (
                <div className={`mobile-submenu${openSubmenu === item.label ? " is-open" : ""}`}>
                  {item.mega.links.map((link) => (
                    <a href={item.href} key={link.label} onClick={() => setMobileOpen(false)}>
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <a className="primary-button mobile-cta" href="#contact" onClick={() => setMobileOpen(false)}>
            Start a Project
          </a>
        </nav>
      </div>
    </header>
  );
}
