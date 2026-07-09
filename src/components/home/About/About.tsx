"use client";

import { motion } from "framer-motion";

import Image from "next/image";

import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";

import { Button } from "@/components/ui/Button/Button";

import AboutCard from "./AboutCard";
import { aboutFeatures } from "@/constants/about";

export default function About() {

    return (

        <section className="py-24">

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

                            badge="Sobre la Feria"

                            title="Tradición, cultura y desarrollo para toda la comunidad."

                            subtitle="La Expo Feria Cultural Andrade Marín reúne en un mismo espacio la riqueza gastronómica, artesanal, turística y cultural del cantón, impulsando el talento local y fortaleciendo la identidad de sus comunidades."

                        />

                        <div className="mt-8">

                            <Button>

                                Conoce más

                            </Button>

                        </div>

                    </motion.div>

                    {/* Imagen */}

                    <motion.div

                        initial={{ opacity: 0, x: 40 }}

                        whileInView={{ opacity: 1, x: 0 }}

                        viewport={{ once: true }}

                        transition={{ duration: .6 }}

                    >

                        <div
                            className="
                                overflow-hidden
                                rounded-3xl
                                shadow-xl
                            "
                        >

                            <Image

                                src="/images/about.png"

                                alt="Expo Feria Cultural"

                                width={700}

                                height={700}

                                className=" h-full w-full object-cover transition-transform duration-500 hover:scale-105 " />

                        </div>

                    </motion.div>

                </div>

                {/* Cards */}

                <div
                    className=" mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3 "         >

                    {

                        aboutFeatures.map((feature, index) => (

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

                                <AboutCard

                                    {...feature}

                                />

                            </motion.div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}