"use client";

import clsx from "clsx";

import {

    Landmark,

    Music,

    Utensils,

    Palette,

} from "lucide-react";
import { TimelineEventProps } from "./TimelineEvent.types";
import { Card } from "../Card/Card";

const iconMap = {

    culture: Landmark,

    music: Music,

    gastronomy: Utensils,

    craft: Palette,

};

export default function TimelineEvent({

    time,

    title,

    description,

    category,

    type,

    align = "left",

}: TimelineEventProps) {

    const Icon = iconMap[type];

    return (

        <div
            className={clsx(

                "relative grid grid-cols-2 items-center gap-12",

                align === "right" && "direction-rtl"

            )}
        >

            {/* Card */}

            <Card
                className={clsx(

                    "relative max-w-md",

                    align === "left"

                        ? "justify-self-end"

                        : "justify-self-start"

                )}
            >

                <span className="text-sm font-medium text-secondary">

                    {time}

                </span>

                <h3 className="mt-3 font-heading text-2xl">

                    {title}

                </h3>

                <p className="mt-4 text-muted leading-8">

                    {description}

                </p>

                <span className="mt-6 inline-flex rounded-full bg-secondary/10 px-4 py-2 text-sm">

                    {category}

                </span>

            </Card>

            {/* Punto */}

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

                <div
                    className="   flex   h-14   w-14   items-center   justify-center   rounded-full   bg-primary   text-white   shadow-lg"
                >

                    <Icon size={24} />

                </div>

            </div>

        </div>

    );

}