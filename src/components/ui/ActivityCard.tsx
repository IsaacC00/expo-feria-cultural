"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ActivityCardProps {
    title: string;
    description: string;
    image: string;
}

export default function ActivityCard({
    title,
    description,
    image,
}: ActivityCardProps) {
    return (
        <motion.article
            whileHover="hover"
            className="group relative h-[420px] overflow-hidden rounded-3xl shadow-md"
        >
            {/* Imagen */}
            <motion.div
                variants={{
                    hover: {
                        scale: 1.08,
                    },
                }}
                transition={{
                    duration: 0.6,
                }}
                className="absolute inset-0"
            >
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </motion.div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            {/* Contenido */}
            <motion.div
                variants={{
                    hover: {
                        y: -10,
                    },
                }}
                transition={{
                    duration: 0.35,
                }}
                className="absolute bottom-0 flex w-full flex-col gap-4 p-8 text-white"
            >
                <h3 className="font-poppins text-3xl font-semibold">
                    {title}
                </h3>

                <p className="text-sm leading-7 text-white/90">
                    {description}
                </p>

                <div className="flex items-center gap-2 font-medium text-secondary">
                    <span>Descubrir más</span>

                    <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                </div>
            </motion.div>
        </motion.article>
    );
}