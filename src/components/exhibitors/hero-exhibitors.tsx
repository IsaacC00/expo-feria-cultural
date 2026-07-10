// components/exhibitors/hero-exhibitors.tsx

import { MessageCircle } from "lucide-react";
import { Button } from "../ui/Button/Button";
import { Container } from "../ui/Container/Container";
import { Section } from "../ui/Section/Section";


export function HeroExhibitors() {
    return (
        <Section className="relative overflow-hidden bg-gradient-to-b from-primary/20 to-background">
            <Container>

                <div className="mx-auto max-w-4xl text-center">

                    <span className="inline-flex rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary">
                        Convocatoria abierta
                    </span>

                    <h1 className="mt-8 text-5xl font-bold">
                        Reserve su Stand y forme parte de la Expo Feria Cultural
                    </h1>

                    <p className="mt-6 text-lg text-muted-foreground">
                        Muestre sus productos, fortalezca su marca y conecte con miles de
                        visitantes durante uno de los eventos culturales más importantes de
                        la región.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-4">

                        <Button>
                            <a href={'https://wa.me/593999999999'}>
                                Solicitar Stand
                            </a>
                        </Button>

                        <Button variant="outline">
                            <a href={'https://wa.me/593999999999'}>
                                Contactar por WhatsApp
                            </a>
                            <MessageCircle className="size-5 shrink-0" />
                        </Button>

                    </div>

                </div>

            </Container>
        </Section>
    );
}