import { ScheduleType } from "@/types/schedule.types";
import { LucideIcon } from "lucide-react";

export interface TimelineEventProps {
    time: string;
    title: string;
    description: string;
    category: string;
    type: ScheduleType;
    isLast?: boolean;
    align?: "left" | "right";
}