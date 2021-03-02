import MailItem from "../mail-item/mail-item.js";
import "./mails-list.css";

export default function MailsList({ mails }) {
  return (
    <table style={{ flex: 1 }}>
      <tbody className="mails-list">
        {mails.map((mail) => (
          <MailItem mail={mail} key={mail.id} />
        ))}
      </tbody>
    </table>
  );
}
