"use client";

import { motion } from "framer-motion";
import { Section } from "../ui/Section/Section";
import { Container } from "../ui/Container/Container";
import { SectionTitle } from "../ui/SectionTitle/SectionTitle";
import ActivityCard from "../ui/ActivityCard";
import { activities } from "@/constants/activities";

export default function Activities() {
    return (
        <Section id="actividades">
            <Container>
                <SectionTitle
                    badge="Experiencias"
                    title="Actividades para disfrutar durante la feria"
                    subtitle="Cada espacio de la Expo Feria Cultural Andrade Marín está pensado para conectar a los visitantes con nuestras tradiciones, sabores y expresiones artísticas."
                />

                <div className="mt-16 grid gap-8 md:grid-cols-2">
                    {activities.map((activity, index) => (
                        <motion.div
                            key={activity.title}
                            initial={{
                                opacity: 0,
                                y: 40,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.15,
                            }}
                        >
                            <ActivityCard
                                title={activity.title}
                                description={activity.description}
                                image={activity.image}
                            />
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}