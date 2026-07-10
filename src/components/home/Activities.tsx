"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle/SectionTitle";
import { activities } from "@/constants/activities";

export default function Activities() {
    return (
        <section id="actividades" className="py-24">

            <div className="mx-auto max-w-7xl px-6">

                <SectionTitle
                    badge="Actividades"
                    title="Descubre todo lo que podrás disfrutar"
                    subtitle="Tres días llenos de experiencias para toda la familia."
                />

                <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {activities.map((activity, index) => {

                        const Icon = activity.icon;

                        return (

                            <motion.div
                                key={activity.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * .1,
                                    duration: .45,
                                }}
                                whileHover={{ y: -8 }}
                            >

                                <div className="group relative overflow-hidden rounded-3xl shadow-lg">

                                    <Image
                                        src={activity.image}
                                        alt={activity.title}
                                        width={500}
                                        height={650}
                                        className="
                                            h-[420px]
                                            w-full
                                            object-cover
                                            transition-transform
                                            duration-700
                                            group-hover:scale-110
                                        "
                                    />

                                    <div
                                        className="
                                            absolute
                                            inset-0
                                            bg-gradient-to-t
                                            from-black/80
                                            via-black/20
                                            to-transparent
                                        "
                                    />

                                    <div
                                        className="
                                            absolute
                                            bottom-0
                                            p-8
                                            text-white
                                        "
                                    >

                                        <div
                                            className="
                                                mb-6
                                                flex
                                                h-14
                                                w-14
                                                items-center
                                                justify-center
                                                rounded-full
                                                bg-primary
                                            "
                                        >

                                            <Icon size={26} />

                                        </div>

                                        <h3
                                            className="
                                                font-heading
                                                text-2xl
                                                font-semibold
                                            "
                                        >

                                            {activity.title}

                                        </h3>

                                        <p
                                            className="
                                                mt-4
                                                leading-7
                                                text-white/80
                                            "
                                        >

                                            {activity.description}

                                        </p>

                                    </div>

                                </div>

                            </motion.div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
}