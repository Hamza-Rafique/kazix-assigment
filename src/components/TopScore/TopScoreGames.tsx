"use client";
import React, { useState, useEffect } from "react";
import TopGamesHeader from "../TopScoreHeader/top_score_header";
import SportCard from "../SportsCard/SportsCard";
import { data } from "../../data/teams_data/data";

const TopScoreGames: React.FC = ({}) => {
  const [viewAll, setViewAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedRates, setSelectedRates] = useState<number[]>([]);

  const handleGameSelection = (rate: number) => {
    if (selectedRates.includes(rate)) {
      setSelectedRates(selectedRates.filter((r) => r !== rate));
    } else {
      setSelectedRates([...selectedRates, rate]);
    }
  };

  const calculateTotalRate = (): number => {
    return selectedRates.reduce((total, rate) => total * rate, 1);
  };
  const onViewAllClick = () => {
    setViewAll(!loading);
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const teams_data = viewAll ? data : data.slice(0, 9);
  const limitedData = viewAll ? data : data.slice(0, 6);
  return (
    <section id="top-games-soccer" className="container mx-auto">
      <TopGamesHeader
        title="Top Soccer Games"
        onViewAllClick={onViewAllClick}
      />
       <div className="p-2 flex justify-around">
            <div className="bg-secondary_dark_800 text-white w-56 h-9 flex justify-between p-2 rounded opacity-75">
              <div>Total Rate</div>
              <div>{calculateTotalRate().toFixed(2)}</div>
            </div>
          </div>
      <div className="flex flex-wrap">
        <SportCard
          data={teams_data}
          loading={loading}
          handleGameSelection={handleGameSelection}
          selectedRates={selectedRates}
        />
      </div>
      <TopGamesHeader
        title="Top Soccer Games"
        onViewAllClick={onViewAllClick}
      />
      <div className="flex flex-wrap">
        <SportCard
          data={limitedData}
          loading={loading}
          handleGameSelection={handleGameSelection}
          selectedRates={selectedRates}
        />
      </div>
      <TopGamesHeader
        title="Top Soccer Games"
        onViewAllClick={onViewAllClick}
      />
      <div className="flex flex-wrap">
        <SportCard
          data={limitedData}
          loading={loading}
          handleGameSelection={handleGameSelection}
          selectedRates={selectedRates}
        />
      </div>
    </section>
  );
};

export default TopScoreGames;
