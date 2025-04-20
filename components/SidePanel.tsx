import React, { useEffect, useRef } from "react";
import ListItem from "./ListItem";

type SidePanelProps = {
  title: string;
  items: string[];
  onMarkDone: (item: string) => void;
  onClose: () => void;
};

export default function SidePanel({ title, items, onMarkDone, onClose }: SidePanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(event.target as Node) && event.target !== document.querySelector('.view-all-button')) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div ref={panelRef} className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-4 z-50 transform transition-transform duration-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <button onClick={onClose} className="text-gray-500">X</button>
      </div>
      <ul className="space-y-2">

        {items.length > 0 ? items.map((item, idx) => (
          <ListItem key={idx} item={item} onMarkDone={onMarkDone} />
        )) : <p>No items</p>}
      </ul>
    </div>
  );
}
