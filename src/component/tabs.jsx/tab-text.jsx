import Tabs from "./tabs";
import "./style.css";
import React from "react";

export default function TabTest() {
  function RandomComponent() {
    return <h1>Some Random Content</h1>;
  }

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is content for Tab1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content for Tab2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];
  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
