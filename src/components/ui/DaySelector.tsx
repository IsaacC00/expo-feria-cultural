"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

import { Day } from "@/types/day";

interface DaySelectorProps {
    days: Day[];
    selectedDay: string;
    onSelect: (day: string) => void;
}

export default function DaySelector({
    days,
    selectedDay,
    onSelect,
}: DaySelectorProps) {
    return (
        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
            {days.map((day) => {
                const isActive = selectedDay === day.id;

                return (
                    <motion.button
                        key={day.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => onSelect(day.id)}
                        className={clsx(
                            "rounded-full px-8 py-3 text-sm font-semibold transition-all duration-300",
                            isActive
                                ? "bg-primary text-white shadow-lg"
                                : "bg-white text-muted shadow-md hover:bg-primary hover:text-white"
                        )}
                    >
                        {day.label}
                    </motion.button>
                );
            })}
        </div>
    );
}