import "./Navbar.scss";
import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="city tour logo" />
      <ul className="navbar-links">
        <li>
          <a href="/" className="navbar-link">
            home
          </a>
        </li>
        <li>
          <a href="/" className="navbar-link">
            about
          </a>
        </li>
        <li>
          <a href="/" className="navbar-link active">
            tours
          </a>
        </li>
      </ul>
    </nav>
  );
}
