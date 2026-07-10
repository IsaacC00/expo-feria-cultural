// components/exhibitors/process-step.tsx

interface ProcessStepProps {
    step: string;
    title: string;
    description: string;
    icon: React.ElementType;
    isLast?: boolean;
}

export function ProcessStep({
    step,
    title,
    description,
    icon: Icon,
    isLast = false,
}: ProcessStepProps) {
    return (
        <div className="relative flex gap-6">

            {/* Línea */}

            {!isLast && (
                <div className="absolute left-8 top-20 h-full w-px bg-border" />
            )}

            {/* Número */}

            <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-white shadow-lg">

                {step}

            </div>

            {/* Contenido */}

            <div className="pb-16">

                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">

                    <Icon className="h-6 w-6" />

                </div>

                <h3 className="text-2xl font-semibold">

                    {title}

                </h3>

                <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">

                    {description}

                </p>

            </div>

        </div>
    );
}