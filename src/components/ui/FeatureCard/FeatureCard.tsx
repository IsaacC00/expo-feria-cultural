"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

import { Card } from "../Card/Card";

import { FeatureCardProps } from "./FeatureCard.types";

export function FeatureCard({

    icon: Icon,

    title,

    description,

    className,

}: FeatureCardProps) {

    return (

        <motion.div

            whileHover={{
                y: -8,
            }}

            transition={{
                duration: .25,
            }}

            className="h-full"

        >

            <Card

                className={clsx(

                    "flex",
                    "h-full",
                    "flex-col",
                    "items-center",
                    "text-center",

                    className

                )}

            >

                <div

                    className="  flex  h-16  w-16  items-center  justify-center  rounded-full  bg-primary/10  text-primary"
                >

                    <Icon size={30} />

                </div>

                <h3

                    className=" mt-6 font-heading text-2xl font-semibold text-foreground"

                >

                    {title}

                </h3>

                <p

                    className=" mt-4 leading-8 text-muted"

                >

                    {description}

                </p>

            </Card>

        </motion.div>

    );

}