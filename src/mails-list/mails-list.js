import MailItem from "../mail-item/mail-item.js";
import "./mails-list.css";

export default function MailsList({ mails }) {
  return (
    <ul className="mailsList">
      {mails.map((mail) => (
        <MailItem mail={mail} />
      ))}
    </ul>
  );
}
