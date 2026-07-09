import {
    ScheduleDayId,
    ScheduleEvent,
} from "@/types/schedule.types";

export const schedule: Record<
    ScheduleDayId,
    ScheduleEvent[]
> = {
    viernes: [
        {
            time: "09:00",
            title: "Inauguración oficial",
            description:
                "Acto de apertura con autoridades locales, invitados especiales y presentación de la banda estudiantil.",
            category: "Cultura",
            type: "culture",
        },
        {
            time: "10:00",
            title: "Presentación de danza folclórica",
            description:
                "Agrupaciones de danza presentan coreografías representativas de la región andina.",
            category: "Cultura",
            type: "culture",
        },
        {
            time: "11:30",
            title: "Exposición artesanal",
            description:
                "Artesanos locales exhiben productos elaborados con técnicas tradicionales.",
            category: "Artesanía",
            type: "craft",
        },
        {
            time: "13:00",
            title: "Festival gastronómico",
            description:
                "Degustación de platos típicos preparados por emprendedores de la comunidad.",
            category: "Gastronomía",
            type: "gastronomy",
        },
        {
            time: "15:00",
            title: "Presentación musical",
            description:
                "Bandas juveniles interpretan música nacional y latinoamericana.",
            category: "Música",
            type: "music",
        },
        {
            time: "17:00",
            title: "Concurso de pintura",
            description:
                "Niños y jóvenes participan en un concurso de arte inspirado en la cultura local.",
            category: "Cultura",
            type: "culture",
        },
        {
            time: "19:00",
            title: "Noche cultural",
            description:
                "Espectáculo con música, danza y teatro para cerrar la primera jornada.",
            category: "Cultura",
            type: "culture",
        },
    ],

    sábado: [
        {
            time: "09:00",
            title: "Apertura de stands",
            description:
                "Inicio de actividades comerciales y exposición de emprendimientos locales.",
            category: "Artesanía",
            type: "craft",
        },
        {
            time: "10:30",
            title: "Taller de cerámica",
            description:
                "Demostración práctica sobre técnicas tradicionales de modelado en barro.",
            category: "Artesanía",
            type: "craft",
        },
        {
            time: "12:00",
            title: "Concurso gastronómico",
            description:
                "Chefs y cocineros locales compiten preparando recetas tradicionales.",
            category: "Gastronomía",
            type: "gastronomy",
        },
        {
            time: "14:00",
            title: "Recital de música andina",
            description:
                "Presentación de agrupaciones invitadas con instrumentos tradicionales.",
            category: "Música",
            type: "music",
        },
        {
            time: "16:00",
            title: "Desfile cultural",
            description:
                "Delegaciones muestran vestimenta típica y expresiones culturales del cantón.",
            category: "Cultura",
            type: "culture",
        },
        {
            time: "18:00",
            title: "Festival de danza urbana",
            description:
                "Espacio dedicado a agrupaciones juveniles y artistas invitados.",
            category: "Música",
            type: "music",
        },
        {
            time: "20:00",
            title: "Concierto principal",
            description:
                "Artistas nacionales ofrecen un espectáculo para cerrar la jornada.",
            category: "Música",
            type: "music",
        },
    ],

    domingo: [
        {
            time: "09:30",
            title: "Feria de emprendimientos",
            description:
                "Exposición de productos elaborados por emprendedores y asociaciones locales.",
            category: "Artesanía",
            type: "craft",
        },
        {
            time: "11:00",
            title: "Festival cultural",
            description:
                "Presentaciones de danza, teatro y música con la participación de instituciones educativas.",
            category: "Cultura",
            type: "culture",
        },
        {
            time: "13:00",
            title: "Muestra gastronómica",
            description:
                "Degustación de platos tradicionales y productos típicos de la región.",
            category: "Gastronomía",
            type: "gastronomy",
        },
        {
            time: "15:00",
            title: "Concurso de música nacional",
            description:
                "Bandas y solistas interpretan repertorio ecuatoriano frente al público.",
            category: "Música",
            type: "music",
        },
        {
            time: "17:00",
            title: "Premiación de expositores",
            description:
                "Reconocimiento a los participantes destacados durante la feria.",
            category: "Cultura",
            type: "culture",
        },
        {
            time: "18:30",
            title: "Clausura oficial",
            description:
                "Acto de cierre con agradecimientos, show artístico y despedida de la Expo Feria Cultural Andrade Marín.",
            category: "Cultura",
            type: "culture",
        },
    ],
};