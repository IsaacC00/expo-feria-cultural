// components/exhibitors/stand-card.tsx

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Card } from "../ui/Card/Card";
import { Button } from "../ui/Button/Button";

interface StandCardProps {
    icon: React.ElementType;
    name: string;
    size: string;
    description: string;
    features: string[];
    featured?: boolean;
}

export function StandCard({
    icon: Icon,
    name,
    size,
    description,
    features,
    featured = false,
}: StandCardProps) {
    return (
        <Card
            className={`
                relative h-full transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl
                ${featured ? "border-primary shadow-lg" : ""}
            `}
        >
            {featured && (
                <span className="absolute right-6 top-6 rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
                    Más solicitado
                </span>
            )}

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="h-8 w-8" />
            </div>

            <h3 className="text-2xl font-bold">
                {name}
            </h3>

            <p className="mt-2 text-sm font-medium text-primary">
                {size}
            </p>

            <p className="mt-6 text-muted-foreground">
                {description}
            </p>

            <ul className="mt-8 space-y-3">
                {features.map((feature) => (
                    <li
                        key={feature}
                        className="flex items-center gap-3"
                    >
                        <Check className="h-5 w-5 text-green-600" />

                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

        </Card>
    );
}