import React from "react";

interface ListItemProps {
  item: string;
  onMarkDone: (item: string) => void;
}

const ListItem: React.FC<ListItemProps> = ({ item, onMarkDone }) => {
  return (
    <li className="flex justify-between items-center border-b py-2">
      <span>{item}</span>
      <button
        onClick={() => onMarkDone(item)}
        className="text-green-600 hover:underline"
      >
        Mark as Done
      </button>
    </li>
  );
};

export default ListItem; 