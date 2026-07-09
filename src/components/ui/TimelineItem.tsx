import {
    Landmark,
    Music,
    Utensils,
    Palette,
} from "lucide-react";

import { TimelineEventProps } from "./TimelineEvent/TimelineEvent.types";


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
}: TimelineEventProps) {

    const Icon = iconMap[type];


    return (
        <div className="relative flex gap-6">

            <div className="flex flex-col items-center">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                    <Icon size={22} />
                </div>

                <div className="h-full w-px bg-gray-200" />

            </div>


            <div className="pb-12">

                <span className="text-sm text-secondary">
                    {time}
                </span>


                <h3 className="mt-2 font-poppins text-xl font-semibold text-text">
                    {title}
                </h3>


                <p className="mt-2 text-text-secondary">
                    {description}
                </p>


                <span className="mt-4 inline-block rounded-full bg-secondary/10 px-4 py-1 text-sm">
                    {category}
                </span>


            </div>

        </div>
    );
}