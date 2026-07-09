export type ScheduleDayId =
    | "viernes"
    | "sábado"
    | "domingo";

export type ScheduleType =
    | "culture"
    | "music"
    | "gastronomy"
    | "craft";

export interface ScheduleEvent {
    time: string;
    title: string;
    description: string;
    category: string;
    type: ScheduleType;
}

export type ScheduleDay =
    | "viernes"
    | "sábado"
    | "domingo";

export interface ScheduleEvent {
    time: string;
    title: string;
    description: string;
    category: string;
    type: ScheduleType;
}

export interface ScheduleDayItem {
    id: ScheduleDay;
    label: string;
}