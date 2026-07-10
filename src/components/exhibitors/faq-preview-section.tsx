import { FAQItem } from "./faq-item";
import { Section } from "../ui/Section/Section";
import { Container } from "../ui/Container/Container";
import { SectionTitle } from "../ui/SectionTitle/SectionTitle";
import { faqPreview } from "@/types/faqPreview";

export function FAQPreviewSection() {
    return (
        <Section id="faq">

            <Container className="max-w-4xl">

                <SectionTitle
                    badge="Preguntas frecuentes"
                    title="Resolvemos sus principales dudas"
                    subtitle="Antes de enviar su solicitud, consulte las respuestas a las preguntas más comunes realizadas por nuestros expositores."
                    align="center"
                />

                <div className="mt-16 space-y-5">

                    {faqPreview.map((item) => (
                        <FAQItem
                            key={item.question}
                            {...item}
                        />
                    ))}

                </div>

            </Container>

        </Section>
    );
}