// components/exhibitors/stand-preview-section.tsx

import Link from "next/link";
import { Section } from "../ui/Section/Section";
import { Container } from "../ui/Container/Container";
import { SectionTitle } from "../ui/SectionTitle/SectionTitle";
import { stands } from "@/data/stands";
import { Button } from "../ui/Button/Button";
import { StandCard } from "./stand-card";

export function StandPreviewSection() {
    return (
        <Section id="stands">

            <Container>

                <SectionTitle
                    badge="Tipos de Stand"
                    title="Encuentre el espacio ideal para su negocio"
                    subtitle="Disponemos de diferentes alternativas de participación adaptadas a las necesidades de emprendedores, artesanos, productores y empresas."
                    align="center"
                />

                <div className="mt-16 grid gap-8 lg:grid-cols-3">

                    {stands.map((stand) => (
                        <StandCard
                            key={stand.id}
                            {...stand}
                        />
                    ))}

                </div>

                <div className="mt-14 flex justify-center">

                    <Button
                        variant="secondary"
                        className="text-[18px]"
                    >
                        <Link href={'https://wa.me/593999999999'}>
                            Solicita tu stand personalizado
                        </Link>
                    </Button>

                </div>

            </Container>

        </Section>
    );
}