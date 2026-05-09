import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
}

/** Wordmark — all `font-serif` (Cinzel) so it matches site headings; subline centered under BLACKLINE. */
const Logo = React.memo(function Logo({ className }: LogoProps) {
    return (
        <div className={cn("flex flex-col items-center text-center leading-none", className)}>
            <span className="font-serif text-[1.35rem] font-bold tracking-[0.16em] text-brand-gold sm:text-[1.75rem] sm:tracking-[0.19em] md:text-3xl md:tracking-[0.2em]">
                BLACKLINE
            </span>
            <span className="font-serif mt-[0.35rem] block text-[0.5625rem] font-semibold uppercase tracking-[0.2em] text-brand-white/88 sm:mt-1 sm:text-[0.625rem] sm:tracking-[0.22em]">
                PUBLIC ADJUSTERS{" "}
                <span className="font-medium text-brand-slate">LLC</span>
            </span>
        </div>
    );
});

export default Logo;
