import "./mail-item.css";
// import { FaStar } from 'react-icons/fa';
import { FiStar } from "react-icons/fi";
import MailActionButtons from "../mail-action-buttons/mail-action-buttons.js";

export default function MailItem({ mail }) {
  return (
    <tr className="mail-group-item">
      <td className="mail-group-item__starred">
        <FiStar />{" "}
      </td>
      <td className="mail-group-item__sentBy">
        <strong> {mail.from.username}</strong>
      </td>
      <td className="mail-group-item__description">
        <strong>{mail.title}</strong> - {mail.description}
      </td>
      <td className="mail-group-item__date">{mail.sentOn}</td>
      <div className="mail-action">
        {" "}
        <MailActionButtons />{" "}
      </div>
    </tr>
  );
}
