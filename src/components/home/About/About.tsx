"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { aboutFeatures, aboutStats } from "@/constants/about.constants";
import { StatItem } from "@/components/ui/StatItem/StatItem";
import { FeatureCard } from "@/components/ui/FeatureCard/FeatureCard";

export default function About() {
    return (
        <section className="bg-background py-24">

            <div className="mx-auto max-w-7xl px-6">

                <div className="grid items-center gap-20 lg:grid-cols-2">

                    {/* Texto */}

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .6 }}
                    >

                        <SectionTitle
                            align="left"
                            badge="Sobre la Expo Feria"
                            title="Tradición que impulsa nuestra identidad."
                        />

                        <SectionDivider />

                        <p className="mt-8 text-lg leading-8 text-muted">

                            La Expo Feria Cultural Andrade Marín reúne la riqueza
                            cultural, gastronómica, artesanal y turística del
                            cantón en un espacio que fortalece el desarrollo
                            local y promueve el talento de su gente.

                        </p>

                        <div className="mt-12 grid grid-cols-3 gap-8">

                            {aboutStats.map((item) => (

                                <StatItem
                                    key={item.label}
                                    {...item}
                                />

                            ))}

                        </div>

                    </motion.div>

                    {/* Imagen */}

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .6 }}
                    >

                        <div className="overflow-hidden rounded-3xl shadow-xl">

                            <Image
                                src="/expo-feria-cultural/images/about.png"
                                alt="Expo Feria Cultural"
                                width={7000}
                                height={700}
                                className="h-[400px] w-full object-cover transition duration-700 hover:scale-105"
                            />

                        </div>

                    </motion.div>

                </div>

                {/* Cards */}

                <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {aboutFeatures.map((feature, index) => (

                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * .15,
                                duration: .5,
                            }}
                        >

                            <FeatureCard {...feature} />

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
}