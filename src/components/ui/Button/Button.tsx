import clsx from "clsx";
import type { ButtonProps } from "./Button.types";

export function Button({
    children,
    variant = "primary",
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            className={clsx(
                // Base
                "inline-flex items-center justify-center gap-2",
                "px-8 py-3",
                "whitespace-nowrap",
                "rounded-button",
                "font-medium",
                "text-sm",
                "transition-all duration-300",
                "shadow-md",
                "hover:-translate-y-1",
                "hover:shadow-xl",
                "active:translate-y-0",

                {
                    // Principal
                    "bg-primary text-white":
                        variant === "primary",

                    // Secundario
                    "bg-secondary text-white":
                        variant === "secondary",

                    // Outline normal
                    "border border-primary text-primary hover:bg-primary hover:text-white":
                        variant === "outline",

                    // Outline para fondos oscuros
                    "border border-white/40 text-white backdrop-blur-sm hover:bg-white hover:text-primary":
                        variant === "outline-light",
                },

                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}