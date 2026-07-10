"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";
import { gastronomy } from "./gastronomy.constants";

export default function Gastronomy() {
    return (
        <section id="gastronomia" className="bg-background py-24 overflow-x-hidden">

            <div className="mx-auto max-w-7xl px-6">

                <SectionTitle
                    badge="Gastronomía"
                    title="Sabores que cuentan historias"
                    subtitle="Descubre los platos tradicionales que forman parte de la identidad gastronómica de Andrade Marín."
                />

                <div
                    className="
                        mt-20
                        grid
                        grid-cols-1
                        gap-10
                        lg:grid-cols-2
                        lg:gap-16
                    "
                >

                    {/* Imagen principal */}

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >

                        <div className="overflow-hidden rounded-3xl shadow-xl">

                            <Image
                                src="/expo-feria-cultural/images/gastronomy/hero.png"
                                alt="Gastronomía"
                                width={700}
                                height={900}
                                className="
                                    h-[320px]
                                    w-full
                                    object-cover
                                    transition-transform
                                    duration-700
                                    hover:scale-105
                                    sm:h-[450px]
                                    lg:h-[700px]
                                "
                            />

                        </div>

                    </motion.div>

                    {/* Cards */}

                    <div className="grid gap-6">

                        {gastronomy.map((food, index) => (

                            <motion.div
                                key={food.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.12,
                                    duration: 0.45,
                                }}
                            >

                                <div
                                    className="
                                        flex
                                        w-full
                                        min-w-0
                                        flex-col
                                        items-center
                                        gap-5

                                        overflow-hidden

                                        rounded-3xl
                                        bg-surface
                                        p-5
                                        shadow-md

                                        transition-all
                                        duration-300

                                        hover:-translate-y-1
                                        hover:shadow-xl

                                        sm:flex-row
                                        sm:items-center
                                    "
                                >

                                    <Image
                                        src={food.image}
                                        alt={food.title}
                                        width={120}
                                        height={120}
                                        className="
                                            h-24
                                            w-24
                                            shrink-0
                                            rounded-2xl
                                            object-cover

                                            sm:h-28
                                            sm:w-28
                                        "
                                    />

                                    <div
                                        className="
                                            min-w-0
                                            flex-1
                                            text-center
                                            sm:text-left
                                        "
                                    >

                                        <h3
                                            className="
                                                text-xl
                                                font-heading
                                                font-semibold
                                                sm:text-2xl
                                            "
                                        >
                                            {food.title}
                                        </h3>

                                        <p
                                            className="
                                                mt-3
                                                break-words
                                                leading-7
                                                text-muted
                                            "
                                        >
                                            {food.description}
                                        </p>

                                    </div>

                                </div>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}