import Label from "./label/label.js";

export default function Labels() {
  const list = [
    { title: "Inbox", icon: null },
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
  return (
    <ul style={{ padding: 0, margin: 0 }}>
      {list.map((label) => (
        <Label key={label.title} {...label} />
      ))}
    </ul>
  );
}
