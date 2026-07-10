// components/exhibitors/benefit-card.tsx

import { Card } from "../ui/Card/Card";

interface BenefitCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
}

export function BenefitCard({
    icon: Icon,
    title,
    description,
}: BenefitCardProps) {
    return (
        <Card className="group h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">

                <Icon className="h-7 w-7" />

            </div>

            <h3 className="mb-4 text-2xl font-semibold">
                {title}
            </h3>

            <p className="leading-relaxed text-muted-foreground">
                {description}
            </p>

        </Card>
    );
}