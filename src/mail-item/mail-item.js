import "./mail-item.css";

export default function MailItem({ mail }) {
  return (
    <li className="mailItem">
      <strong>{mail.from.username}</strong>
      <p>
        <strong>{mail.title}</strong> - {mail.description}
      </p>
    </li>
  );
}
