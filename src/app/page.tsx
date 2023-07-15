import HeroSection from "@/components/LeagueBanner/LeagueBanner";
import TopScoreGames from "@/components/TopScore/TopScoreGames";

export default function Home() {
  return (
    <main className="min-h-screen bg-secondary_dark_950">
      <HeroSection />
      <TopScoreGames />
    </main>
  );
}
