"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

import {
    MapPin,
    Phone,
    Mail,
    Clock,
    ArrowUpRight,
} from "lucide-react";

import { Button } from "@/components/ui/Button/Button";
import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";

import { location } from "./location.constants";

const Map = dynamic(() => import("./Map"), {
    ssr: false,
});

export default function Location() {
    return (
        <section className="bg-background py-24">

            <div className="mx-auto max-w-7xl px-6">

                <SectionTitle
                    badge="Ubicación"
                    title="Ven y vive la experiencia"
                    subtitle="Te esperamos para disfrutar juntos de tres días llenos de cultura, tradición y gastronomía."
                />

                <div className="mt-20 grid gap-12 lg:grid-cols-2">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >

                        <div className="overflow-hidden rounded-3xl shadow-xl">

                            <Map />

                        </div>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >

                        <div className="rounded-3xl bg-surface p-10 shadow-lg">

                            <h3 className="font-heading text-3xl font-semibold">

                                {location.title}

                            </h3>

                            <div className="mt-10 space-y-8">

                                <Info
                                    icon={MapPin}
                                    title="Dirección"
                                    value={location.address}
                                />

                                <Info
                                    icon={Phone}
                                    title="Teléfono"
                                    value={location.phone}
                                />

                                <Info
                                    icon={Mail}
                                    title="Correo"
                                    value={location.email}
                                />

                                <Info
                                    icon={Clock}
                                    title="Horario"
                                    value={location.schedule}
                                />

                            </div>

                            <Button
                                className="mt-10"
                                onClick={() =>
                                    window.open(
                                        location.googleMaps,
                                        "_blank"
                                    )
                                }
                            >
                                Cómo llegar

                                <ArrowUpRight
                                    size={18}
                                    className="ml-2"
                                />

                            </Button>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}

interface InfoProps {
    icon: React.ElementType;
    title: string;
    value: string;
}

function Info({
    icon: Icon,
    title,
    value,
}: InfoProps) {
    return (
        <div className="flex gap-5">

            <div className="rounded-full bg-primary/10 p-4 text-primary">

                <Icon size={22} />

            </div>

            <div>

                <h4 className="font-semibold">

                    {title}

                </h4>

                <p className="mt-1 text-muted">

                    {value}

                </p>

            </div>

        </div>
    );
}