"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface SpotlightProps {
    open: boolean;
    image: string;
    alt: string;
    onClose: () => void;
}

export function Spotlight({
    open,
    image,
    alt,
    onClose,
}: SpotlightProps) {
    return (
        <AnimatePresence>

            {open && (

                <motion.div

                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}

                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md p-6"

                    onClick={onClose}
                >

                    <motion.div

                        initial={{
                            opacity: 0,
                            scale: .85,
                            y: 40,
                            rotate: -2,
                        }}

                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            rotate: 0,
                        }}

                        exit={{
                            opacity: 0,
                            scale: .85,
                            y: 40,
                        }}

                        transition={{
                            duration: .35,
                            ease: "easeOut",
                        }}

                        onClick={(e) => e.stopPropagation()}

                        className="relative"

                    >

                        <button

                            onClick={onClose}

                            className="
                            absolute
                            right-4
                            top-4
                            z-20

                            rounded-full

                            bg-white

                            p-2

                            shadow-xl

                            transition-transform

                            hover:scale-110
                        "

                        >

                            <X className="size-5" />

                        </button>

                        <Image

                            src={image}

                            alt={alt}

                            width={850}

                            height={1200}

                            priority

                            className="
                                w-[90vw]
                                max-w-sm

                                md:w-auto
                                md:max-h-[80vh]

                                h-auto
                                object-contain

                                rounded-[32px]
                                shadow-[0_40px_120px_rgba(0,0,0,.45)]
                                select-none
                            "

                        />

                    </motion.div>

                </motion.div>

            )}

        </AnimatePresence>
    );
}