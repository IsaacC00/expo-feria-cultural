// data/exhibitors/stands.ts

import {
    Store,
    Sparkles,
    Crown
} from "lucide-react";

export const stands = [
    {
        id: 1,
        icon: Store,
        name: "Stand Básico",
        size: "3 × 3 m",
        description:
            "Ideal para emprendedores y pequeños productores que desean presentar sus productos al público.",
        features: [
            "Espacio delimitado",
            "Acceso a energía eléctrica",
            "Credencial para expositor",
        ],
        featured: false,
    },
    {
        id: 2,
        icon: Sparkles,
        name: "Stand Comercial",
        size: "4 × 4 m",
        description:
            "Pensado para empresas que requieren mayor espacio para exhibición y atención al cliente.",
        features: [
            "Mayor área de exposición",
            "Punto eléctrico",
            "Ubicación preferencial",
        ],
        featured: true,
    },
    {
        id: 3,
        icon: Crown,
        name: "Stand Premium",
        size: "5 × 5 m",
        description:
            "La mejor alternativa para marcas que buscan máxima visibilidad durante la feria.",
        features: [
            "Ubicación estratégica",
            "Mayor área",
            "Alta visibilidad",
        ],
        featured: false,
    },
];