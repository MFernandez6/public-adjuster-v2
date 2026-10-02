import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
}

/** Gold B mark beside the Cinzel wordmark; subline centered under BLACKLINE. */
const Logo = React.memo(function Logo({ className }: LogoProps) {
    return (
        <div className={cn("flex items-center gap-3 sm:gap-4", className)}>
            <Image
                src="/brand/blackline-mark.png"
                alt=""
                width={626}
                height={272}
                priority
                className="h-7 w-auto shrink-0 select-none sm:h-9"
            />
            <div className="flex flex-col items-center text-center leading-none">
                <span className="font-serif text-[1.35rem] font-bold tracking-[0.16em] text-brand-gold sm:text-[1.75rem] sm:tracking-[0.19em] md:text-3xl md:tracking-[0.2em]">
                    BLACKLINE
                </span>
                <span className="font-serif mt-[0.35rem] block text-[0.5625rem] font-semibold uppercase tracking-[0.2em] text-brand-white/88 sm:mt-1 sm:text-[0.625rem] sm:tracking-[0.22em]">
                    PUBLIC ADJUSTERS{" "}
                    <span className="font-medium text-brand-slate">LLC</span>
                </span>
            </div>
        </div>
    );
});

export default Logo;
