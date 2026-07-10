// components/exhibitors/benefits-section.tsx
import { benefits } from "@/data/benefits";
import { Container } from "../ui/Container/Container";
import { Section } from "../ui/Section/Section";
import { SectionTitle } from "../ui/SectionTitle/SectionTitle";
import { BenefitCard } from "./benefit-card";

export function BenefitsSection() {
    return (
        <Section id="beneficios">

            <Container>

                <SectionTitle
                    badge="Beneficios"
                    title="¿Por qué participar como expositor?"
                    subtitle="La Expo Feria Cultural es una oportunidad para fortalecer la presencia de su negocio, generar nuevas relaciones comerciales y acercarse a un público interesado en sus productos o servicios."
                    align="center"
                />

                <div className="mt-16 grid gap-8 md:grid-cols-2">

                    {benefits.map((benefit) => (
                        <BenefitCard
                            key={benefit.title}
                            {...benefit}
                        />
                    ))}

                </div>

            </Container>

        </Section>
    );
}