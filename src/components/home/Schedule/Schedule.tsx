"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


import type {
    ScheduleDayItem,
    ScheduleDayId,
} from "@/components/ui/ScheduleTabs/ScheduleTabs.types";
import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";
import ScheduleTabs from "@/components/ui/ScheduleTabs/ScheduleTabs";
import TimelineEvent from "@/components/ui/TimelineItem";
import { schedule } from "@/constants/schedule";

const days: ScheduleDayItem[] = [
    { id: "viernes", label: "Viernes" },
    { id: "sábado", label: "Sábado" },
    { id: "domingo", label: "Domingo" },
];

export default function Schedule() {

    const [activeDay, setActiveDay] =
        useState<ScheduleDayId>("viernes");

    return (

        <section id="cronograma" className="py-24">

            <div className="mx-auto max-w-6xl px-6">

                <SectionTitle

                    badge="Cronograma"

                    title="Tres días llenos de cultura"

                    subtitle="Descubre las actividades más importantes de la Expo Feria Cultural Andrade Marín."

                />

                <div className="mt-12">

                    <ScheduleTabs

                        days={days}

                        activeDay={activeDay}

                        onChange={setActiveDay}

                    />

                </div>

                <AnimatePresence mode="wait">

                    <motion.div

                        key={activeDay}

                        initial={{ opacity: 0, y: 30 }}

                        animate={{ opacity: 1, y: 0 }}

                        exit={{ opacity: 0, y: -20 }}

                        transition={{ duration: .4 }}

                        className="relative mt-20"

                    >

                        {/* Línea central */}

                        {/* <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gray-200" /> */}

                        <div className="space-y-16">

                            {schedule[activeDay].map((event, index) => (

                                <TimelineEvent

                                    key={index}

                                    {...event}

                                    align={index % 2 === 0 ? "left" : "right"}

                                />

                            ))}

                        </div>

                    </motion.div>

                </AnimatePresence>

            </div>

        </section>

    );

}