"use client";

import { motion } from "framer-motion";
import { TimelineEventProps } from "./TimelineEvent.types";

export default function TimelineEvent({
    time,
    title,
    description,
    category,
    icon: Icon,
}: TimelineEventProps) {
    return (
        <motion.article
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="relative flex gap-8"
        >
            {/* Línea */}
            <div className="relative flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-white shadow-lg">
                    <Icon size={20} />
                </div>

                <div className="mt-2 h-full w-[2px] bg-secondary/30" />
            </div>

            {/* Contenido */}
            <div className="flex-1 rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <span className="text-sm font-semibold tracking-widest text-secondary uppercase">
                    {time}
                </span>

                <h3 className="mt-2 text-2xl font-semibold text-primary">
                    {title}
                </h3>

                <p className="mt-4 leading-7 text-muted">
                    {description}
                </p>

                <span className="mt-6 inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                    {category}
                </span>
            </div>
        </motion.article>
    );
}