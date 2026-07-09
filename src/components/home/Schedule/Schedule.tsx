"use client";

import { useState } from "react";
import { days } from "@/constants/days";
import { Section } from "@/components/ui/Section/Section";
import { Container } from "@/components/ui/Container/Container";
import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";
import ScheduleTabs from "@/components/ui/ScheduleTabs/ScheduleTabs";

export default function Schedule() {

    const [activeDay, setActiveDay] = useState(days[0].id);

    return (

        <Section id="cronograma">

            <Container>

                <SectionTitle
                    badge="Cronograma"
                    title="Vive cada momento de la feria"
                    subtitle="Consulta las actividades programadas para cada día."
                />

                <div className="mt-12">

                    <ScheduleTabs
                        days={days}
                        activeDay={activeDay}
                        onChange={setActiveDay}
                    />

                </div>

            </Container>

        </Section>

    );

}