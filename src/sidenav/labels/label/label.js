import { MdLabel } from "react-icons/md";

export default function Label({ title, icon: Icon }) {
  return (
    <div>
      {Icon === null ? <MdLabel /> : <Icon />}
      <span>{title}</span>
    </div>
  );
}
