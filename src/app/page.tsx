import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedStats from "@/components/FeaturedStats";
import FeaturedGrid from "@/components/FeaturedGrid";
import ProCarousel from "@/components/ProCarousel";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProCarousel />
      <FeaturedStats />
      <FeaturedGrid />

    </>
  );
}
