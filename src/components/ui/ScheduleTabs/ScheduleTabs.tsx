"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

import { Button } from "../Button/Button";
import { ScheduleTabsProps } from "./ScheduleTabs.types";



export default function ScheduleTabs({
    days,
    activeDay,
    onChange,
}: ScheduleTabsProps) {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            {days.map((day) => {
                const active = activeDay === day.id;

                return (
                    <motion.div
                        key={day.id}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <Button
                            onClick={() => onChange(day.id)}
                            variant={active ? "primary" : "outline"}
                            className={clsx(
                                "min-w-32",
                                "transition-all duration-300"
                            )}
                        >
                            {day.label}
                        </Button>
                    </motion.div>
                );
            })}
        </div>
    );
}