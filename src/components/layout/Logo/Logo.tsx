import clsx from "clsx";


interface LogoProps {

    light?: boolean;

    className?: string;

}


export function Logo({

    light = false,

    className,

}: LogoProps) {


    return (

        <div

            className={clsx("font-heading", "leading-tight",
                className
            )}

        >


            <span

                className={clsx("block", "text-xl", "font-semibold",
                    light

                        ?

                        "text-white"

                        :

                        "text-primary"

                )}

            >

                Andrade Marín

            </span>



            <span

                className={clsx("block", "text-xs", "tracking-[0.25em]", "uppercase",
                    light

                        ?

                        "text-white/80"

                        :

                        "text-muted"

                )}

            >

                Expo Feria Cultural

            </span>



        </div>

    );


}