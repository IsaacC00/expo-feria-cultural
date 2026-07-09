import clsx from "clsx";

import type {
    ButtonProps
} from "./Button.types";


export function Button({

    children,

    variant = "primary",

    className,

    ...props

}: ButtonProps) {


    return (

        <button

            className={clsx(

                /*
                Base
                */

                "inline-flex items-center justify-center",

                "px-8 py-3",

                "rounded-button",

                "font-medium",

                "text-sm",

                "transition-all duration-300",

                "shadow-md",

                "hover:scale-105",

                "active:scale-95",


                /*
                Variantes
                */

                {

                    "bg-primary text-white hover:shadow-xl":
                        variant === "primary",


                    "bg-secondary text-white hover:shadow-xl":
                        variant === "secondary",


                    "border border-primary text-primary hover:bg-primary hover:text-white":
                        variant === "outline"

                },


                className

            )}

            {...props}

        >

            {children}

        </button>

    );


}