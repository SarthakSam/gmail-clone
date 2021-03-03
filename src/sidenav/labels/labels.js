import Label from "./label/label.js";
import { HiInbox } from "react-icons/hi";

export default function Labels({ activeTab, tabChanged }) {
  const list = [
    { title: "Inbox", icon: HiInbox },
    { title: "Starred", icon: null },
    { title: "Snoozed", icon: null },
    { title: "Important", icon: null },
    { title: "Sent", icon: null },
    { title: "Personal", icon: null },
    { title: "Label1", icon: null },
    { title: "Label2", icon: null },
    { title: "Trash", icon: null },
    { title: "Create new label", icon: null }
  ];

  function labelChanged(name) {
    if (name !== activeTab) tabChanged(name);
  }

  return (
    <ul style={{ padding: 0, margin: 0 }}>
      {list.map((label) => (
        <Label
          key={label.title}
          {...label}
          isActive={activeTab === label.title}
          onClickHandler={labelChanged.bind(null, label.title)}
        />
      ))}
    </ul>
  );
}
