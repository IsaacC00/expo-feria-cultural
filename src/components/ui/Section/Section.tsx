import clsx from "clsx";

import type { SectionProps } from "./Section.types";


export function Section({

    children,

    className,

    id,

}: SectionProps) {


    return (

        <section

            id={id}

            className={clsx(

                "py-24",

                className

            )}

        >

            {children}

        </section>

    );


}