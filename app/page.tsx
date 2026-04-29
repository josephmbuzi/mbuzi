import { Articles } from "./components/articles";
import { CaseStudies } from "./components/case-studies";
import { Hero } from "./components/hero";
import { Showings } from "./components/showings";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Showings />
      <CaseStudies />
      <Articles />
    </main>
  );
}
