import React from "react";

type TabProps = {
  tabs: string[];
  activeTab: string;
  onClick: (tab: string) => void;
  unread: { [key: string]: boolean };
};

export default function TabBar({ tabs, activeTab, onClick, unread }: TabProps) {
  return (
    <div className="flex space-x-4 border-b">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`relative px-2 md:px-4 py-2 ${
            activeTab === tab ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => onClick(tab)}
        >
          {tab}
          {unread[tab] && (
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          )}
        </button>
      ))}
    </div>
  );
}
