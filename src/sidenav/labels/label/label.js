import { MdLabel } from "react-icons/md";

export default function Label({ title, icon: Icon, isActive, onClickHandler }) {
  return (
    <div
      style={{
        cursor: "pointer",
        backgroundColor: isActive ? "lightBlue" : ""
      }}
      onClick={onClickHandler}
    >
      {Icon === null ? <MdLabel /> : <Icon />}
      <span>{title}</span>
    </div>
  );
}
