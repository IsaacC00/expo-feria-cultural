"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {

    type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/ui/Section/Section";
import { Container } from "@/components/ui/Container/Container";
import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";
import { Card } from "@/components/ui/Card/Card";
import { aboutFeatures } from "@/constants/about";

interface Feature {
    title: string;
    description: string;
    icon: LucideIcon;
}


const features = aboutFeatures;


export default function About() {
    return (
        <Section id="sobre">
            <Container>

                <SectionTitle
                    badge="Nuestra esencia"
                    title="Una celebración de cultura y tradición"
                    subtitle="La Expo Feria Cultural Andrade Marín reúne gastronomía, música, artesanía y comunidad en una experiencia llena de identidad."
                />


                <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">


                    {/* Imagen */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -40,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="relative h-[450px] overflow-hidden rounded-3xl"
                    >

                        <Image
                            src="/images/about-feria.jpg"
                            alt="Cultura y tradición de Andrade Marín"
                            fill
                            className="object-cover"
                        />

                    </motion.div>



                    {/* Texto */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 40,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="space-y-6"
                    >

                        <h3 className="text-3xl font-semibold text-primary">
                            Tradición que conecta generaciones
                        </h3>


                        <p className="text-lg leading-relaxed text-muted">
                            La Expo Feria Cultural Andrade Marín nace como un punto de
                            encuentro para celebrar nuestra identidad, destacando el talento
                            de artesanos, emprendedores, artistas y productores locales.
                        </p>


                        <p className="text-lg leading-relaxed text-muted">
                            Un lugar donde la cultura, la gastronomía y las tradiciones se
                            unen para crear una experiencia única para visitantes y familias.
                        </p>


                    </motion.div>


                </div>




                {/* Cards culturales */}

                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">


                    {features.map((item, index) => {

                        const Icon = item.icon;


                        return (

                            <motion.div
                                key={item.title}
                                initial={{
                                    opacity: 0,
                                    y: 30,
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

                                <Card>

                                    <div className="flex flex-col items-center text-center gap-5 h-52">


                                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary/20">

                                            <Icon
                                                size={28}
                                                className="text-secondary"
                                            />

                                        </div>


                                        <h4 className="text-xl font-semibold text-primary">
                                            {item.title}
                                        </h4>


                                        <p className="text-muted leading-relaxed">
                                            {item.description}
                                        </p>


                                    </div>


                                </Card>


                            </motion.div>

                        );

                    })}


                </div>


            </Container>
        </Section>
    );
}