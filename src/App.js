import "./styles.css";
import MailsList from "./mails-list/mails-list.js";
import { mails as Mails } from "./mockmails.js";
import Navbar from "./navbar/navbar.js";
import Sidenav from "./sidenav/sidenav.js";
import { useState } from "react";

export default function App() {
  const [mails, setMails] = useState(Mails);
  const [activeTab, setActiveTab] = useState("Inbox");

  function tabChanged(tab) {
    setActiveTab(tab);
  }

  function getFilteredMails() {
    let filteredMails = [];
    if (activeTab === "Trash") {
      filteredMails = mails.filter((mail) => mail["deleted"]);
    } else if (activeTab === "Archive") {
      filteredMails = mails.filter((mail) => mail["archived"]);
    } else if (activeTab === "Inbox") {
      filteredMails = mails.filter(
        (mail) => !mail["deleted"] && !mail["archived"]
      );
    } else {
      filteredMails = mails.filter(
        (mail) =>
          !mail["deleted"] &&
          !mail["archived"] &&
          mail.labels.includes(activeTab)
      );
    }
    // switch (activeTab) {
    //   case "Inbox":
    //     filteredMails = mails.filter(
    //       (mail) => !mail["deleted"] && !mail["archived"]
    //     );
    //     break;
    //   case "Starred":
    //     filteredMails = mails.filter((mail) => mail["starred"]);
    //     break;
    //   case "Sent":
    //     filteredMails = mails.filter((mail) => mail["starred"]);
    //     break;
    //   case "Trash":
    //     filteredMails = mails.filter((mail) => mail["deleted"]);
    //     break;
    //   default:
    //     filteredMails = mails.filter((mail) =>
    //       mail["labels"].includes(activeTab)
    //     );
    //     break;
    // }
    return filteredMails;
  }

  return (
    <div className="App">
      <Navbar />
      <main style={{ display: "flex" }}>
        <Sidenav activeTab={activeTab} tabChanged={tabChanged} />
        <MailsList mails={getFilteredMails()} />
      </main>
    </div>
  );
}
