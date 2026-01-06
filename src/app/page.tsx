import Navbar from "@/components/Navbar";
import TopCarousel from "@/components/TopCarousel";
import Hero from "@/components/Hero";
import FeaturedStats from "@/components/FeaturedStats";
import FeaturedGrid from "@/components/FeaturedGrid";
import ProCarousel from "@/components/ProCarousel";


export default function Home() {
  return (
    <>
      <Navbar />
            <TopCarousel /> 
      <Hero />
      <ProCarousel />
      <FeaturedStats />
      <FeaturedGrid />

    </>
  );
}
