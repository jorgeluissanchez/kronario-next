import React from "react";
import Typography from "@/components/atoms/typography";

interface ItemProps {
  id: string;
  name: string;
  category: string;
  selected: boolean;
  onClick: () => void;
}

const Item: React.FC<ItemProps> = ({ id, name, category, selected, onClick }) => {
  return (
    <li
      className={`rounded-lg p-4 flex flex-col cursor-pointer ${selected ? 'bg-gray-300' : 'bg-gray-100 md:hover:bg-gray-200'} transition-colors duration-300`}
      onClick={onClick}
    >
      <div className="truncate line-clamp-2">
        <Typography type="text" color="blue">{name}</Typography>
        <Typography type="subtext" color="gray">{category}</Typography>
      </div>
    </li>
  );
};

export default Item;
