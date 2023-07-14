import React from 'react';
import LeagueCard from '../league_card/league_card';

const HeroSection: React.FC = () => {
  return (
    <section id='hero-section' className="container mx-auto flex">
      <LeagueCard
        team="Tottenham"
        teamTwo='Leicester City'
        teamScore='4'
        teamTwoScore='2'
      />
      <LeagueCard
        team="Tottenham"
        teamTwo='Leicester City'
        teamScore='4'
        teamTwoScore='2'
      />
    </section>
  );
};

export default HeroSection;
