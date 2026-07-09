import type { LucideIcon } from "lucide-react";

export interface TimelineEventProps {
    time: string;
    title: string;
    description: string;
    category: string;
    icon: LucideIcon;
}