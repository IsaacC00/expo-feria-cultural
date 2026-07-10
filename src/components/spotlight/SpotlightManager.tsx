"use client";

import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

import { Spotlight } from "./Spotlight";
import { spotlights } from "@/constants/spotlights";


export function SpotlightManager() {

    const pathname = usePathname();

    const [open, setOpen] = useState(false);

    useEffect(() => {

        setOpen(true);

    }, [pathname]);

    const spotlight = pathname.startsWith("/exhibitors")

        ? spotlights.exhibitors

        : spotlights.home;

    return (

        <Spotlight

            open={open}

            image={spotlight.image}

            alt={spotlight.alt}

            onClose={() => setOpen(false)}

        />

    );

}