import React, { useState, useEffect } from "react";
import TabBar from "./TabBar";
import Accordion from "./Accordion";
import SidePanel from "./SidePanel";

const dummyData: Record<string, string[]> = {
  Assignments: ["Math Homework 1", "Science Quiz", "Essay Draft 2"],
  Resources: ["Lecture Notes", "Lab Instructions", "Reading List"],
  Messages: ["Reminder from Prof", "Group Chat", "New Assignment Posted"],
};

const fullData: Record<string, string[]> = {
  Assignments: Array.from({ length: 10 }, (_, i) => `Assignment ${i + 1}`),
  Resources: Array.from({ length: 10 }, (_, i) => `Resource ${i + 1}`),
  Messages: Array.from({ length: 10 }, (_, i) => `Message ${i + 1}`),
};

export default function StudentDashboard() {
  const tabs = ["Assignments", "Resources", "Messages"];
  const [activeTab, setActiveTab] = useState("Assignments");
  const [openTab, setOpenTab] = useState<string | null>(null);
  const [sidePanelTab, setSidePanelTab] = useState<string | null>(null);
  const [doneItems, setDoneItems] = useState<Record<string, string[]>>({});
  const [hasMounted, setHasMounted] = useState(false);
  
  useEffect(() => {
    const stored = localStorage.getItem("doneItems");
    if (stored) setDoneItems(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("doneItems", JSON.stringify(doneItems));
  }, [doneItems]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setOpenTab(openTab === tab ? null : tab);
  };

  const handleViewAll = () => setSidePanelTab(activeTab);

  const handleMarkDone = (item: string) => {
    setDoneItems((prev) => {
      const updated = {
        ...prev,
        [sidePanelTab!]: [...(prev[sidePanelTab!] || []), item],
      };
      return updated;
    });
  };

  const isUnread = (tab: string) => {
    const all = fullData[tab];
    const done = doneItems[tab] || [];
    return all.length !== done.length;
  };

  const filteredItems = (tab: string) =>
    (fullData[tab] || []).filter((item) => !(doneItems[tab] || []).includes(item));

  
  useEffect(() => {
    setHasMounted(true);
  }, []);
  
  if (!hasMounted) return null;

  return (
    <div>
      <TabBar
        tabs={tabs}
        activeTab={activeTab}
        onClick={handleTabClick}
        unread={{
          Assignments: isUnread("Assignments"),
          Resources: isUnread("Resources"),
          Messages: isUnread("Messages"),
        }}
      />
      {openTab && (
        <Accordion items={dummyData[openTab]} onViewAll={handleViewAll} />
      )}
      {sidePanelTab && (
        <SidePanel
          title={sidePanelTab}
          items={filteredItems(sidePanelTab)}
          onMarkDone={handleMarkDone}
          onClose={() => setSidePanelTab(null)}
        />
      )}
    </div>
  );
}
