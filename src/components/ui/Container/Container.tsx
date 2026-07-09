import clsx from "clsx";
import { ContainerProps } from "./Container.types";

export function Container({

    children,

    className,

}: ContainerProps) {


    return (

        <div

            className={clsx(

                "mx-auto w-full max-w-7xl px-6",

                className

            )}

        >

            {children}

        </div>

    );


}