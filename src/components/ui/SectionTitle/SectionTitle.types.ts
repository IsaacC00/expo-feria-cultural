export type SectionTitleAlign =
    | "left"
    | "center";


export interface SectionTitleProps {

    title: string;

    subtitle?: string;

    badge?: string;

    align?: SectionTitleAlign;

    className?: string;

}