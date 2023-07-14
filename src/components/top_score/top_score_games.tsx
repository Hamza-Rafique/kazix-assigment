"use client";
import React, { useState } from "react";
import TopGamesHeader from "../top_score_header/top_score_header";
import SportCard from "../sports_card/sports_card";

const TopScoreGames: React.FC = ({}) => {
  const [open, setOpen] = useState(false);
  const onViewAllClick = () => {
    setOpen(true);
  };
  return (
    <section id="top-games-soccer" className="container mx-auto">
      <TopGamesHeader
        title="Top Soccer Games"
        onViewAllClick={onViewAllClick}
      />
      <div className="flex">
        <SportCard
          teamOne="Argentina"
          teamTwo="Liga Professional"
          time="Today, 21:30"
          clubName="Barracas Central"
          location="CA Central Cordoba SE"
        />
        <SportCard
          teamOne="Argentina"
          teamTwo="Liga Professional"
          time="Today, 21:30"
          clubName="Barracas Central"
          location="CA Central Cordoba SE"
        />
        <SportCard
          teamOne="Argentina"
          teamTwo="Liga Professional"
          time="Today, 21:30"
          clubName="Barracas Central"
          location="CA Central Cordoba SE"
        />
      </div>
    </section>
  );
};

export default TopScoreGames;
