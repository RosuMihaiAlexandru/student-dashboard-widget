import React from "react";

type AccordionProps = {
  items: string[];
  onViewAll: () => void;
};

export default function Accordion({ items, onViewAll }: AccordionProps) {
  return (
    <div className="bg-white shadow p-4 mt-2 rounded">
      <ul className="space-y-1">
        {items.map((item, idx) => (
          <li key={idx} className="text-gray-700">
            {item}
          </li>
        ))}
      </ul>
      <button onClick={onViewAll} className="mt-2 text-blue-600 underline">
        View All
      </button>
    </div>
  );
}
