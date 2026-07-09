"use client";

import { motion } from "framer-motion";

import { Card } from "@/components/ui/Card/Card";

import { AboutCardProps } from "./AboutCard.types";

export default function AboutCard({

    icon: Icon,

    title,

    description,

}: AboutCardProps) {

    return (

        <motion.div

            whileHover={{ y: -8 }}

            transition={{ duration: .3 }}

        >

            <Card className="h-full text-center">

                <div
                    className=" mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary  "              >

                    <Icon size={32} />

                </div>

                <h3
                    className=" mt-6 font-heading text-2xl font-semibold text-foreground "
                >

                    {title}

                </h3>

                <p
                    className=" mt-4 leading-8 text-muted "
                >

                    {description}

                </p>

            </Card>

        </motion.div>

    );

}