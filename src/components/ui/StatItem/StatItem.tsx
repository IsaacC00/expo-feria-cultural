import { StatItemProps } from "./StatItem.types";

export function StatItem({

    value,

    label,

}: StatItemProps) {

    return (

        <div className="text-center">

            <h3

                className=" font-heading text-4xl font-bold text-primary"

            >

                {value}

            </h3>

            <p

                className=" mt-2 text-muted "

            >

                {label}

            </p>

        </div>

    );

}