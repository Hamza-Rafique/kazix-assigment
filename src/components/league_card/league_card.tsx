import React from "react";
import Image from "next/image";

interface LeagueCardProps {
  team: string;
  teamTwo: string;
  teamScore: string;
  teamTwoScore: string;
}

const LeagueCard: React.FC<LeagueCardProps> = ({
  team,
  teamTwo,
  teamScore,
  teamTwoScore,
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(/assets/images/football-stadium-night-generative-ai.png)`,
      }}
      className="bg-no-repeat bg-opacity-50 w-1/2 mr-4"
    >
      <div className="bg-secondary backdrop-blur-sm">
      <div className="flex items-center m-4">
        <Image
          src="/assets/icons/sport-icons.svg"
          alt="Support"
          width={16}
          height={16}
        />
        <span className="text-white ml-2 mr-2">England</span>
        <Image
          src="/assets/icons/UI-Icon.svg"
          alt="Support"
          width={16}
          height={16}
        />
        <span className="text-white ml-2 mr-2">Premier League</span>
      </div>
      <div className="p-4 flex justify-center">
        <h3 className="text-xl font-bold text-white">
          {team} - {teamTwo}
        </h3>
      </div>
      <div className="p-1 flex justify-center">
        <div className="py-3 px-5 bg-secondary_dark_950 text-white font-bold text-xl rounded-lg mr-3 opacity-75">
          {teamScore}
        </div>
        <div className="py-3 px-5 bg-secondary_dark_950 text-white font-bold text-xl rounded-lg opacity-75">
          {teamTwoScore}
        </div>
      </div>
      <div className="p-2 flex justify-around">
        <div className="bg-secondary_dark_800 text-white w-56 h-9 flex justify-between p-2 rounded opacity-75">
          <div>1</div>
          <div>1.01</div>
        </div>
        <div className="bg-secondary_dark_800 text-white w-56 h-9 flex justify-between p-2 rounded mx-2 opacity-75">
          <div>Draw</div>
          <div>2.40</div>
        </div>
        <div className="bg-secondary_dark_800 text-white w-56 h-9 flex justify-between p-2 rounded opacity-75">
          <div>2</div>
          <div>5.13</div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default LeagueCard;
