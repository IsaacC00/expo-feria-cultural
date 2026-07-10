// app/expositores/page.tsx

import { BenefitsSection } from "@/components/exhibitors/benefits-section";
import { FAQPreviewSection } from "@/components/exhibitors/faq-preview-section";
import { FinalCTASection } from "@/components/exhibitors/final-cta-section";
import { HeroExhibitors } from "@/components/exhibitors/hero-exhibitors";
import { ReservationProcessSection } from "@/components/exhibitors/reservation-process-section";
import { StandPreviewSection } from "@/components/exhibitors/stand-preview-section";

export default function ExhibitorsPage() {
    return (
        <>
            <HeroExhibitors />

            <BenefitsSection />

            <StandPreviewSection />

            <ReservationProcessSection />

            <FAQPreviewSection />

            <FinalCTASection />
        </>
    );
}