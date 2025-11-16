import { NavLink, Link } from "react-router-dom";
import logoMark from "../assets/logo.jpg";
import SocialIcons from "./SocialIcons";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Header = () => (
  <header className="site-header">
    <div className="container site-header__inner">
      <Link to="/" className="brand">
        <img src={logoMark} alt="Dark Peak Landscaping logo" className="brand-mark" />
        <span>Dark Peak Landscaping</span>
      </Link>
      <nav className="site-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => (isActive ? "nav-link nav-link-active" : "nav-link")}
          >
            {item.label}
          </NavLink>
        ))}
        <SocialIcons />
      </nav>
      <a className="call-link" href="tel:07702252453">
        07702 252453
      </a>
    </div>
  </header>
);

export default Header;
