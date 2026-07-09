import About from "@/components/home/About/About";
import Activities from "@/components/home/Activities";
import { Hero } from "@/components/home/Hero/Hero";
import Schedule from "@/components/home/Schedule/Schedule";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import TimelineItem from "@/components/ui/TimelineItem";
import { events } from "@/constants/events";

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

        <TimelineItem {...events} />

        {/* <TimelineEvent
          time="09:00"
          title="Apertura Oficial"
          description="Inicio oficial de la Expo Feria Cultural Andrade Marín con autoridades e invitados."
          category="Cultura"
          icon="landmark"
        /> */}



      </main>
    </>

  );

}