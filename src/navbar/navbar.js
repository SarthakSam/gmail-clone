import { SiGmail } from "react-icons/si";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <label>
        <SiGmail /> <span>Gmail</span>
      </label>
      <input type="text" className="nav__search" placeholder="Search email" />
    </nav>
  );
}
