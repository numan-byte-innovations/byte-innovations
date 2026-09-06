const footerColumns = [
  { heading: "Company", links: ["About Us", "Our Process", "Contact Us"] },
  { heading: "Services", links: ["End to End Development", "Team Augmentation", "MVP Service", "Enterprise Solution"] },
  { heading: "Products", links: ["Expert POS", "Expert ERP", "ExpertHRMS", "ExpertATS"] },
  { heading: "Career", links: ["Why Join Us", "Job Openings", "Submit Your Profile"] },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-top">
        <div className="footer-brand">
          <img src="/images/byte-logo-dark.png" alt="Byte Innovations" className="footer-logo" />
          <p>A software engineering studio building products for founders and enterprises — and the products we run ourselves.</p>
        </div>

        <div className="footer-columns">
          {footerColumns.map((column) => (
            <div className="footer-column" key={column.heading}>
              <p className="footer-column-heading">{column.heading}</p>
              <ul>
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#top">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="site-container footer-banner">
        <p>build beyond limits</p>
      </div>
    </footer>
  );
}
