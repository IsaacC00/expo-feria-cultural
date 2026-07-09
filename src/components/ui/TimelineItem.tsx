"use client";

import { motion } from "framer-motion";
import { Clock3 } from "lucide-react";

interface TimelineItemProps {
    time: string;
    title: string;
    description: string;
    index: number;
}

export default function TimelineItem({
    time,
    title,
    description,
    index,
}: TimelineItemProps) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                x: index % 2 === 0 ? -40 : 40,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
            viewport={{ once: true }}
            transition={{
                duration: 0.6,
                delay: index * 0.15,
            }}
            className="relative pl-12"
        >
            {/* Línea */}
            <div className="absolute left-4 top-0 h-full w-[2px] bg-secondary/30" />

            {/* Punto */}
            <div className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary shadow-lg">
                <Clock3
                    size={16}
                    className="text-white"
                />
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
                    {time}
                </span>

                <h3 className="mt-2 text-2xl font-semibold text-primary">
                    {title}
                </h3>

                <p className="mt-4 leading-7 text-muted">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}