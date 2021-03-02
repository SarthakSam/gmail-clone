import { MdArchive } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";
import { BsClockFill } from "react-icons/bs";

import "./mail-actions-buttons.css";

export default function MailActionButtons() {
  return (
    <ul className="mail-action-list">
      <li className="mail-action-list__button">
        <MdArchive />
      </li>
      <li className="mail-action-list__button">
        <FaTrash />
      </li>
      <li className="mail-action-list__button">
        <HiMailOpen />
      </li>
      <li className="mail-action-list__button">
        <BsClockFill />
      </li>
    </ul>
  );
}
