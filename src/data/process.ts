// data/exhibitors/process.ts

import {
    ClipboardList,
    LayoutGrid,
    FileText,
    MessageCircle,
    BadgeCheck,
} from "lucide-react";

export const reservationProcess = [
    {
        step: "01",
        icon: ClipboardList,
        title: "Revise la información",
        description:
            "Conozca los tipos de stands disponibles, sus características y los requisitos para participar.",
    },
    {
        step: "02",
        icon: LayoutGrid,
        title: "Seleccione un stand",
        description:
            "Identifique la opción que mejor se adapte a las necesidades de su emprendimiento o empresa.",
    },
    {
        step: "03",
        icon: FileText,
        title: "Complete la solicitud",
        description:
            "Llene el formulario con sus datos de contacto para iniciar el proceso de inscripción.",
    },
    {
        step: "04",
        icon: MessageCircle,
        title: "Contacto con el Consejo",
        description:
            "Será redirigido a WhatsApp para continuar la coordinación directamente con el equipo organizador.",
    },
    {
        step: "05",
        icon: BadgeCheck,
        title: "Confirmación de participación",
        description:
            "El Consejo revisará la información y confirmará manualmente la disponibilidad del stand.",
    },
];