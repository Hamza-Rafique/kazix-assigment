import HeroSection from '@/components/hero/hero'
import TopScoreGames from '@/components/top_score/top_score_games'

export default function Home() {
  return (
    <main className="min-h-screen bg-secondary_dark_950">
      <HeroSection />
      <TopScoreGames />
    </main>

  )
}
