"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";
import { sponsors } from "./sponsors.constants";

export default function Sponsors() {
    return (
        <section className="py-24 overflow-hidden">

            <div className="mx-auto max-w-7xl px-6">

                <SectionTitle
                    badge="Organizan y apoyan"
                    title="Instituciones que hacen posible este evento"
                    subtitle="Gracias al apoyo de instituciones públicas y privadas que impulsan el desarrollo cultural."
                />

                <div className="relative mt-20 overflow-hidden">

                    <motion.div
                        className="flex gap-16"
                        animate={{
                            x: ["0%", "-50%"],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {[...sponsors, ...sponsors].map((sponsor, index) => (

                            <div
                                key={index}
                                className=" flex h-36 min-w-[220px] items-center justify-center rounded-3xl bg-surface shadow-md" >

                                <Image
                                    src={sponsor.logo}
                                    alt={sponsor.name}
                                    width={180}
                                    height={100}
                                    className=" max-h-20 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0 hover:scale-110 " />

                            </div>

                        ))}

                    </motion.div>

                </div>

            </div>

        </section>
    );
}