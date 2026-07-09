import About from "@/components/home/About/About";
import Activities from "@/components/home/Activities";
import Gallery from "@/components/home/Gallery/Gallery";
import { Hero } from "@/components/home/Hero/Hero";
import Schedule from "@/components/home/Schedule/Schedule";
import { Navbar } from "@/components/layout/Navbar/Navbar";

export default function Home() {

  return (
    <>


      <main className="bg-background">
        <Navbar />
        {/* Hero temporal */}
        <Hero />
        <About />

        <Activities />

        <Schedule />

        <Gallery />

      </main>
    </>

  );

}