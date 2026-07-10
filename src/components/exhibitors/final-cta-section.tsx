import Link from "next/link";

import {
    ArrowRight,
    CheckCircle2,
    MessageCircle,
} from "lucide-react";
import { Section } from "../ui/Section/Section";
import { Container } from "../ui/Container/Container";
import { Button } from "../ui/Button/Button";

export function FinalCTASection() {
    return (
        <Section>

            <Container>

                <div className="relative overflow-hidden rounded-[40px] bg-primary px-8 py-20 text-center text-white lg:px-20">

                    {/* Decoración */}

                    <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

                    <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

                    {/* Contenido */}

                    <div className="relative mx-auto max-w-3xl">

                        <span className="rounded-full border border-white/30 px-4 py-2 text-sm">

                            Convocatoria abierta

                        </span>

                        <h2 className="mt-8 text-4xl font-bold lg:text-5xl">

                            ¿Listo para formar parte de la Expo Feria Cultural?

                        </h2>

                        <p className="mt-6 text-lg text-white/80">

                            Complete su solicitud y permita que el Consejo
                            organizador lo acompañe durante el proceso de
                            asignación de stands.

                        </p>

                        <div className="mt-12 flex flex-wrap justify-center gap-5">

                            <Button
                                variant="secondary"
                            >
                                <Link
                                    href={'https://wa.me/593999999999'}
                                    className="flex items-center gap-2"
                                >

                                    Solicitar Stand

                                    <ArrowRight className="ml-2 h-4 w-4" />

                                </Link>

                            </Button>

                            <Button
                                variant="outline-light"
                            >
                                <Link
                                    href={'https://wa.me/593999999999'}
                                    className="flex items-center gap-2"
                                >
                                    <MessageCircle className="size-5 shrink-0" />

                                    <span>WhatsApp</span>
                                </Link>
                            </Button>

                        </div>

                    </div>

                    <div className="mt-14 flex flex-wrap justify-center gap-8 border-t border-white/20 pt-10 text-sm">

                        <div className="flex items-center gap-2">

                            <CheckCircle2 className="h-5 w-5" />

                            <span>Solicitud rápida</span>

                        </div>

                        <div className="flex items-center gap-2">

                            <CheckCircle2 className="h-5 w-5" />

                            <span>Atención personalizada</span>

                        </div>

                        <div className="flex items-center gap-2">

                            <CheckCircle2 className="h-5 w-5" />

                            <span>Confirmación manual</span>

                        </div>

                    </div>


                </div>


            </Container>

        </Section>
    );
}