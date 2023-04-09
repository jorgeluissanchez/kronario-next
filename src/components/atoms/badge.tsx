import React, { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  color: string;
  selected: boolean;
  onClick: () => void;
}

const Badge: React.FC<BadgeProps> = ({ children, color, selected, onClick }) => {

    let colorClass = "";
    if (color === "blue") {
        colorClass = "bg-blue-500 text-white md:hover:bg-blue-600";
    } else if (color === "green") {
        colorClass = "bg-green-500 text-white md:hover:bg-green-600";
    } else if (color === "yellow") {
        colorClass = "bg-yellow-500 text-white md:hover:bg-yellow-600";
    }

  return (
    <a
      className={`inline-flex items-center mx-2 text-sm font-medium rounded-2xl py-2 px-5 ${selected ? colorClass : "bg-gray-100 text-gray-600 md:hover:bg-gray-200"} hover:cursor-pointer transition-colors duration-300`}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Badge;

