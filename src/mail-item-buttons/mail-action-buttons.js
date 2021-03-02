import { MdArchive } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";
import { BsClockFill } from "react-icons/bs";

export default function MailActionButtons() {
  return (
    <ul className="mail-action-buttons">
      <li>
        <MdArchive />
      </li>
      <li>
        <FaTrash />
      </li>
      <li>
        <HiMailOpen />
      </li>
      <li>
        <BsClockFill />
      </li>
    </ul>
  );
}
