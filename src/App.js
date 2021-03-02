import "./styles.css";
import MailsList from "./mails-list/mails-list.js";
import { mails } from "./mockmails.js";
import Navbar from "./navbar/navbar.js";
import Sidenav from "./sidenav/sidenav.js";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <main style={{ display: "flex" }}>
        <Sidenav />
        <MailsList mails={mails} />
      </main>
    </div>
  );
}
