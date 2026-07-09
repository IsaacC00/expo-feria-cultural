import clsx from "clsx";

import type {
    SectionTitleProps
} from "./SectionTitle.types";


export function SectionTitle({

    title,

    subtitle,

    badge,

    align = "center",

    className,

}: SectionTitleProps) {


    return (

        <div

            className={clsx("max-w-3xl",

                {

                    "text-center mx-auto":
                        align === "center",

                    "text-left":
                        align === "left",

                },

                className

            )}

        >


            {
                badge && (

                    <span

                        className=" inline-block mb-4 text-sm font-medium uppercase tracking-widest text-secondary "

                    >

                        {badge}

                    </span>

                )

            }



            <h2

                className=" font-heading text-3xl md:text-4xl font-semibold text-foreground "

            >

                {title}

            </h2>



            {
                subtitle && (

                    <p

                        className=" mt-5 text-lg text-muted leading-relaxed "

                    >

                        {subtitle}

                    </p>

                )

            }



        </div>

    );


}