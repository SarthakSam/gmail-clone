import "./styles.css";
import MailsList from "./mails-list/mails-list.js";
import { mails } from "./mockmails.js";

export default function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <main>
        {/* <SideNav /> */}
        <MailsList mails={mails} />
      </main>
    </div>
  );
}
