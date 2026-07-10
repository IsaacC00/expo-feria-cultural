import About from "@/components/home/About/About";
import Activities from "@/components/home/Activities";
import Gallery from "@/components/home/Gallery/Gallery";
import Gastronomy from "@/components/home/Gastronomy/Gastronomy";
import { Hero } from "@/components/home/Hero/Hero";
import Schedule from "@/components/home/Schedule/Schedule";
import Sponsors from "@/components/home/Sponsors/Sponsors";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import Location from "./Location/Location";
import Footer from "@/components/home/Footer/Footer";

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
        <Gastronomy />
        <Sponsors />
        <Location />
        <Footer />
      </main>
    </>

  );

}