"use client";


import { useEffect, useState } from "react";

import clsx from "clsx";

import {
    Menu,
    X
} from "lucide-react";
import { Container } from "@/components/ui/Container/Container";
import { Button } from "@/components/ui/Button/Button";
import { Logo } from "../Logo/Logo";
import { usePathname } from "next/navigation";

import {
    homeNavigation,
    exhibitorsNavigation,
} from "@/constants/navigation";


export function Navbar() {

    const pathname = usePathname();

    const isExhibitors = pathname.startsWith("/exhibitors");
    const currentNavigation = isExhibitors
        ? exhibitorsNavigation
        : homeNavigation;

    const [scrolled, setScrolled] = useState(false);

    const [open, setOpen] = useState(false);



    useEffect(() => {


        const handleScroll = () => {

            setScrolled(
                window.scrollY > 50
            );

        };


        window.addEventListener(
            "scroll",
            handleScroll
        );


        return () => {

            window.removeEventListener(
                "scroll",
                handleScroll
            );

        };


    }, []);



    return (

        <header

            className={clsx("fixed top-0 left-0 z-50 w-full", "transition-all duration-300",


                scrolled

                    ?
                    "bg-white/80 backdrop-blur-md shadow-md"

                    :

                    "bg-transparent"

            )}

        >


            <Container>


                <nav

                    className=" flex h-20 items-center justify-between "

                >


                    {/* Logo */}

                    <Logo light={!scrolled} />

                    {/* Desktop */}

                    <div

                        className=" hidden md:flex items-center gap-8 "

                    >


                        {
                            currentNavigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={clsx(
                                        "text-sm font-medium transition-colors",
                                        scrolled
                                            ? "text-foreground"
                                            : "text-white",
                                        "hover:text-primary"
                                    )}
                                >
                                    {item.name}
                                </a>
                            ))
                        }



                        <Button>

                            <a href="/exhibitors">
                                Reservar Stand
                            </a>

                        </Button>


                    </div>





                    {/* Mobile Button */}

                    <button

                        onClick={() => setOpen(!open)}

                        className=" md:hidden text-primary "

                    >

                        {

                            open

                                ?

                                <X size={28} />

                                :

                                <Menu size={28} />

                        }


                    </button>



                </nav>



            </Container>



            {/* Mobile Menu */}

            {

                open && (

                    <div

                        className=" md:hidden bg-white shadow-lg "

                    >


                        <Container>


                            <div

                                className=" flex flex-col gap-6 py-8 "

                            >


                                {
                                    currentNavigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={clsx(
                                                "text-sm font-medium transition-colors",
                                                scrolled
                                                    ? "text-foreground"
                                                    : "text-white",
                                                "hover:text-primary"
                                            )}
                                        >
                                            {item.name}
                                        </a>
                                    ))
                                }



                                <Button>
                                    <a href="/exhibitors">
                                        Reservar Stand
                                    </a>
                                </Button>


                            </div>


                        </Container>


                    </div>

                )

            }



        </header>

    );


}