import React from "react";
import Image from "next/image";

interface TopGamesProps {
  title: string;
  onViewAllClick: () => void;
}

const TopGamesHeader: React.FC<TopGamesProps> = ({ title, onViewAllClick }) => {
  return (
    <div className="flex items-center justify-between py-4 border-radius: 8px; border-1.5px solid;">
      <div className="flex items-center">
        <span className="font-semibold text-white">{title}</span>
      </div>
      <div className="flex">
        <button
          className="flex items-center px-4 py-2 text-white bg-secondary_dark_50 rounded-md focus:outline-none"
          onClick={onViewAllClick}
        >
          View All
        </button>
        <div className="flex items-center px-2 py-2 text-white bg-secondary_dark_50 rounded-md focus:outline-none mx-3 ">
        <Image
          src="/assets/icons/UI-Icon (1).svg"
          alt="next"
          width={16}
          height={16}
        />
        </div>
        <div className="flex items-center px-2 py-2 text-white bg-secondary_dark_50 rounded-md focus:outline-none">
        <Image
          src="/assets/icons/UI-Icon.svg"
          alt="next"
          width={16}
          height={16}
        />
        </div>
      </div>
    </div>
  );
};

export default TopGamesHeader;
