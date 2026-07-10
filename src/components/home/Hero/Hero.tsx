'use client'
import Image from "next/image";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container/Container";
import { Button } from "@/components/ui/Button/Button";
import { fadeUp } from "@/lib/animations";


export function Hero() {


    return (

        <section

            id="inicio"

            className=" relative min-h-screen flex items-center overflow-hidden ">


            {/* Imagen */}

            <Image

                src="/expo-feria-cultural/images/hero.png"
                // src="images/hero.png"
                alt="Expo Feria Cultural Andrade Marín"
                fill
                priority
                className=" object-cover "
            />



            {/* Overlay */}

            <div

                className=" absolute inset-0 bg-black/50 "

            />



            {/* Contenido */}

            <Container>


                <div

                    className=" relative z-10 max-w-3xl text-white ">


                    <motion.h1
                        {...fadeUp}
                        initial={{
                            opacity: 0,
                            y: 30
                        }}

                        animate={{
                            opacity: 1,
                            y: 0
                        }}

                        transition={{
                            duration: .8
                        }}

                        className=" font-heading text-5xl md:text-7xl font-bold leading-tight ">

                        Expo Feria Cultural
                        <br />

                        Andrade Marín

                    </motion.h1>



                    <motion.p

                        initial={{
                            opacity: 0,
                            y: 30
                        }}

                        animate={{
                            opacity: 1,
                            y: 0
                        }}

                        transition={{
                            duration: .8,
                            delay: .2
                        }}

                        className=" mt-6 text-lg md:text-xl text-white/90 max-w-xl "

                    >

                        Tradición, cultura, gastronomía
                        y experiencias que celebran
                        nuestra identidad.

                    </motion.p>




                    <motion.div

                        initial={{
                            opacity: 0,
                            y: 30
                        }}

                        animate={{
                            opacity: 1,
                            y: 0
                        }}

                        transition={{
                            duration: .8,
                            delay: .4
                        }}

                        className=" mt-8 "

                    >


                        <Button>

                            Conoce la Feria

                        </Button>


                    </motion.div>


                </div>


            </Container>


            {/* Scroll indicator */}

            <motion.div

                animate={{
                    y: [0, 10, 0]
                }}

                transition={{
                    duration: 1.5,
                    repeat: Infinity
                }}

                className=" absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-2xl " >

                ↓


            </motion.div>


        </section>

    );

}