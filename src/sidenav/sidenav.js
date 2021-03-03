import "./sidenav.css";
import { FiPlus } from "react-icons/fi";
import Labels from "./labels/labels.js";
import React from "react";

export default function Sidenav({ activeTab, tabChanged }) {
  return (
    <aside className="aside">
      <button className="aside__compose">
        <FiPlus className="aside__compose__icon" />
        <span>Compose</span>
      </button>
      <Labels activeTab={activeTab} tabChanged={tabChanged} />
    </aside>
  );
}
