"use client";

import {
    Landmark,
    Music,
    Utensils,
    Palette,
} from "lucide-react";

import clsx from "clsx";
import { TimelineEventProps } from "../TimelineEvent/TimelineEvent.types";
import { Card } from "../Card/Card";

const iconMap = {
    culture: Landmark,
    music: Music,
    gastronomy: Utensils,
    craft: Palette,
};

const badgeStyles = {
    culture:
        "bg-[var(--color-primary)]/10 text-[var(--color-primary)]",

    music:
        "bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]",

    gastronomy:
        "bg-[var(--color-success)]/10 text-[var(--color-success)]",

    craft:
        "bg-orange-100 text-orange-700",
};

export default function TimelineEvent({
    time,
    title,
    description,
    category,
    type,
}: TimelineEventProps) {
    const Icon = iconMap[type];

    return (
        <div className="relative flex gap-8">

            {/* Línea */}

            <div className="relative flex w-16 justify-center">

                <div className="absolute top-0 bottom-0 w-[2px] bg-gray-200" />

                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-primary)] text-white shadow-lg transition-all duration-300 group-hover:scale-110">

                    <Icon size={24} />

                </div>

            </div>

            {/* Card */}

            <Card
                className="
                    group
                    flex-1
                    border
                    border-gray-100
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                "
            >

                <span className="text-sm font-medium text-[var(--color-secondary)]">
                    {time}
                </span>

                <h3 className="mt-3 text-2xl font-bold text-[var(--color-text)]">
                    {title}
                </h3>

                <p className="mt-4 leading-8 text-[var(--color-text-secondary)]">
                    {description}
                </p>

                <span
                    className={clsx(
                        "mt-6 inline-flex w-fit rounded-full px-4 py-2 text-sm font-medium",
                        badgeStyles[type]
                    )}
                >
                    {category}
                </span>

            </Card>

        </div>
    );
}