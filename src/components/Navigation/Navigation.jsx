import { navLinks } from "./navLinks";
import "./Navigation.scss";

function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="nav__links text--main text--main">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
