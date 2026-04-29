import { CaseStudies } from "./components/case-studies";
import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Showings } from "./components/showings";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Showings />
      <CaseStudies />
    </main>
  );
}
