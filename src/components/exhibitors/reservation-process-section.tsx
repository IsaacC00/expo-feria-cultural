import { reservationProcess } from "@/data/process";
import { Container } from "../ui/Container/Container";
import { Section } from "../ui/Section/Section";
import { SectionTitle } from "../ui/SectionTitle/SectionTitle";
import { ProcessStep } from "./process-step";
import { Card } from "../ui/Card/Card";
import { Info } from "lucide-react";

export function ReservationProcessSection() {
    return (
        <Section id="proceso">

            <Container className="max-w-5xl">

                <SectionTitle
                    badge="Proceso"
                    title="¿Cómo reservar un stand?"
                    subtitle="Hemos simplificado el proceso para que pueda realizar su solicitud de manera rápida y recibir acompañamiento directo del Consejo organizador."
                    align="center"
                />

                <div className="mt-20">

                    {reservationProcess.map((step, index) => (
                        <ProcessStep
                            key={step.step}
                            {...step}
                            isLast={index === reservationProcess.length - 1}
                        />
                    ))}

                </div>

                <Card className="mt-12 border-primary/20 bg-primary/5">
                    <div className="flex items-start gap-4">

                        <Info className="mt-1 h-6 w-6 text-primary" />

                        <div>

                            <h4 className="text-lg font-semibold">
                                Importante
                            </h4>

                            <p className="mt-2 text-muted-foreground">
                                La asignación de stands se realiza de forma manual por el
                                Consejo organizador. El envío del formulario representa una
                                solicitud de participación y está sujeto a la disponibilidad
                                de espacios.
                            </p>

                        </div>

                    </div>
                </Card>
            </Container>
        </Section>
    );
}