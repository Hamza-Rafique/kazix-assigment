import React from "react";
import LeagueCard from "../LeagueCard/LeagueCard";

const LeagueBanner: React.FC = () => {
  return (
    <section id="banner-section" className="container mx-auto flex">
      <LeagueCard
        team="Tottenham"
        teamTwo="Leicester City"
        teamScore="4"
        teamTwoScore="2"
      />
      <LeagueCard
        team="Manchester United"
        teamTwo="Liverpool"
        teamScore="1"
        teamTwoScore="1"
      />
    </section>
  );
};

export default LeagueBanner;
