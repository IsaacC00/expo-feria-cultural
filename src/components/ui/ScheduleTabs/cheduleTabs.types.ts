export interface ScheduleDay {
    id: string;
    label: string;
}

export interface ScheduleTabsProps {
    days: ScheduleDay[];
    activeDay: string;
    onChange: (day: string) => void;
}