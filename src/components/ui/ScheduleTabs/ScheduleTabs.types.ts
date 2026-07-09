export type ScheduleDayId =
    | "viernes"
    | "sábado"
    | "domingo";

export interface ScheduleDayItem {
    id: ScheduleDayId;
    label: string;
}

export interface ScheduleTabsProps {
    days: readonly ScheduleDayItem[];
    activeDay: ScheduleDayId;
    onChange: (day: ScheduleDayId) => void;
}