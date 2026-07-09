import clsx from "clsx";

import type {
    CardProps
} from "./Card.types";


export function Card({

    children,

    className,

}: CardProps) {


    return (

        <div

            className={clsx(

                "bg-surface",

                "rounded-card",

                "p-8",

                "shadow-md",

                "transition-all",

                "duration-300",

                "hover:shadow-xl",

                "hover:-translate-y-1",

                className

            )}

        >

            {children}

        </div>

    );

}