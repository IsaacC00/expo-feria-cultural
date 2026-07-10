"use client";

import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";


import {
    footerLinks,
    socialLinks,
} from "./footer.constants";
import { Logo } from "@/components/layout/Logo/Logo";

export default function Footer() {

    const scrollTop = () =>
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

    return (

        <footer className="bg-footer text-white">

            <div className="mx-auto max-w-7xl px-6 py-20">

                <div className="grid gap-16 lg:grid-cols-4">

                    {/* Logo */}

                    <div>

                        <Logo />

                        <p className="mt-6 leading-8 text-white/70">

                            Celebrando nuestra cultura,
                            gastronomía y tradiciones para
                            fortalecer la identidad de
                            Andrade Marín.

                        </p>

                    </div>

                    {/* Navegación */}

                    <div>

                        <h3 className="mb-6 font-heading text-xl">

                            Navegación

                        </h3>

                        <ul className="space-y-4">

                            {footerLinks.map((link) => (

                                <li key={link.title}>

                                    <a
                                        href={link.href}
                                        className="transition hover:text-secondary"
                                    >
                                        {link.title}
                                    </a>

                                </li>

                            ))}

                        </ul>

                    </div>

                    {/* Contacto */}

                    <div>

                        <h3 className="mb-6 font-heading text-xl">

                            Contacto

                        </h3>

                        <ul className="space-y-4 text-white/70">

                            <li>
                                Andrade Marín - Ecuador
                            </li>

                            <li>
                                +593 999 999 999
                            </li>

                            <li>
                                info@expoferia.com
                            </li>

                        </ul>

                    </div>

                    {/* Redes */}

                    <div>

                        <h3 className="mb-6 font-heading text-xl">

                            Síguenos

                        </h3>

                        <div className="flex gap-4">

                            {socialLinks.map((social, index) => {

                                const Icon = social.icon;

                                return (

                                    <motion.a

                                        key={index}

                                        href={social.href}

                                        whileHover={{
                                            scale: 1.1,
                                            y: -3,
                                        }}

                                        className="
                                            flex
                                            h-12
                                            w-12
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-white/10
                                            transition
                                            hover:bg-primary
                                        "

                                    >

                                        <Icon size={22} />

                                    </motion.a>

                                );

                            })}

                        </div>

                    </div>

                </div>

                {/* Línea */}

                <div className="my-12 h-px bg-white/10" />

                {/* Bottom */}

                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

                    <p className="text-white/60">

                        © 2026 Expo Feria Cultural Andrade Marín.
                        Todos los derechos reservados.

                    </p>

                    <motion.button

                        whileHover={{
                            y: -3,
                        }}

                        whileTap={{
                            scale: .95,
                        }}

                        onClick={scrollTop}

                        className="
                            flex
                            items-center
                            gap-2
                            rounded-full
                            bg-primary
                            px-6
                            py-3
                            font-medium
                            transition
                            hover:bg-secondary
                        "

                    >

                        Volver arriba

                        <ArrowUp size={18} />

                    </motion.button>

                </div>

            </div>

        </footer>

    );

}