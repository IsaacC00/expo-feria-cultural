// components/exhibitors/faq-item.tsx

"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
    question: string;
    answer: string;
}

export function FAQItem({
    question,
    answer,
}: FAQItemProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className="rounded-3xl border bg-card transition-all">

            <button
                onClick={() => setOpen(!open)}
                className="flex w-full items-center justify-between p-6 text-left"
            >
                <h3 className="font-semibold">
                    {question}
                </h3>

                <ChevronDown
                    className={`transition-transform ${open ? "rotate-180" : ""
                        }`}
                />
            </button>

            {open && (
                <div className="px-6 pb-6">

                    <p className="text-muted-foreground">
                        {answer}
                    </p>

                </div>
            )}

        </div>
    );
}