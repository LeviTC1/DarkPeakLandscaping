import { Link } from "react-router-dom";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="brand">Dark Peak Landscaping</p>
          <p>Serving Whaley Bridge and the surrounding High Peak villages.</p>
          <p>
            Call <a href="tel:07702252453">07702 252453</a> or email
            <a href="mailto:liamthorpe52@gmail.com"> liamthorpe52@gmail.com</a>
          </p>
          <SocialIcons />
        </div>
        <div>
          <p className="footer-heading">Service areas</p>
          <ul>
            <li>Whaley Bridge</li>
            <li>New Mills</li>
            <li>Chapel-en-le-Frith</li>
            <li>Disley &amp; Buxton</li>
          </ul>
        </div>
        <div>
          <p className="footer-heading">Quick links</p>
          <ul>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <p className="footer-note">&copy; {new Date().getFullYear()} Dark Peak Landscaping and Maintenance.</p>
    </footer>
  );
};

export default Footer;
