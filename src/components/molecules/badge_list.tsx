import React from "react";
import Badge from "@/components/atoms/badge";

interface BadgeListProps {
  badges: string[];
  color: string;
  selectedBadges: (badge: string | string[]) => boolean;
  onClick: any;
}

const BadgeList: React.FC<BadgeListProps> = ({ badges, color, selectedBadges, onClick }) => {
  return (
    <div className="flex overflow-x-auto bg-white py-2 px-2 lg:justify-center whitespace-nowrap scrollbar-width: none;" style={{ width: "100%" }}>
      {/* Generar los badges en base a la lista de props */}
      {badges.map((badge, index) => (
        <Badge key={index} color={color} selected={selectedBadges(badge)} onClick={() => onClick(badge)}>
          {badge}
        </Badge>
      ))}
    </div>
  );
};

export default BadgeList;
