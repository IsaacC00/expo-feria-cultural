"use client";

import Image from "next/image";
import { motion } from "framer-motion";


import { gallery } from "./gallery.constants";
import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";

export default function Gallery() {
    return (
        <section className="bg-background py-24">

            <div className="mx-auto max-w-7xl px-6">

                <SectionTitle
                    badge="Galería"
                    title="Revive los mejores momentos"
                    subtitle="Una muestra de la cultura, gastronomía y tradición que hacen única a nuestra Expo Feria."
                />

                <div className="mt-20 columns-1 gap-6 md:columns-2 lg:columns-3">

                    {gallery.map((image, index) => (

                        <motion.div
                            key={image}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.05,
                                duration: .4,
                            }}
                            className="mb-6 overflow-hidden rounded-3xl"
                        >

                            <div className="group relative overflow-hidden rounded-3xl">

                                <Image
                                    src={image}
                                    alt={`Galería ${index + 1}`}
                                    width={800}
                                    height={1200}
                                    className=" h-auto w-full object-cover transition-transform duration-700 group-hover:scale-110 " />

                                <div
                                    className=" absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/25 " />

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
}