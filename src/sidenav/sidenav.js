import "./sidenav.css";
import { FiPlus } from "react-icons/fi";

export default function Sidenav() {
  return (
    <aside className="aside">
      <button className="aside__compose">
        <FiPlus className="aside__compose__icon" />
        <span>Compose</span>
      </button>
    </aside>
  );
}
