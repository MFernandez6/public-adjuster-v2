import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
    /** `horizontal` for nav/footer; `stacked` for brand moments; `mark` for favicon-scale uses */
    variant?: "horizontal" | "stacked" | "mark";
    /** Include tagline under stacked lockup */
    showTagline?: boolean;
}

/** Open-top shield with interlocking BL — gold mark for Blackline. */
export function BlacklineMark({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 80 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("text-brand-gold", className)}
            aria-hidden
        >
            <path
                d="M12 16 V56 C12 71 27 83.5 40 90 C53 83.5 68 71 68 56 V16"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* Serif B */}
            <path
                fill="currentColor"
                d="M24.5 22h18.2c6.55 0 10.9 3.85 10.9 9.35 0 3.7-2.05 6.4-5.35 7.55 4.15 1.05 6.85 4.35 6.85 9.05 0 6.35-4.9 10.55-12.45 10.55H24.5V22Zm7.6 6.55v8.7h9.55c3.05 0 4.85-1.7 4.85-4.35s-1.8-4.35-4.85-4.35H32.1Zm0 15.2v8.95h10.1c3.35 0 5.25-1.95 5.25-4.55 0-2.55-1.9-4.4-5.25-4.4H32.1Z"
            />
            {/* Serif L interlocking under B */}
            <path
                fill="currentColor"
                d="M37.5 48h7.4v20.2H62v7.1H37.5V48Z"
            />
        </svg>
    );
}

/**
 * Brand lockup — Cinzel wordmark + gold BL shield mark.
 * Matches navy/gold site system (#0F1C2E / #C6A85B).
 */
const Logo = React.memo(function Logo({
    className,
    variant = "horizontal",
    showTagline = false,
}: LogoProps) {
    if (variant === "mark") {
        return (
            <div className={cn("inline-flex", className)}>
                <BlacklineMark className="h-10 w-auto" />
            </div>
        );
    }

    if (variant === "stacked") {
        return (
            <div className={cn("flex flex-col items-center text-center leading-none", className)}>
                <BlacklineMark className="mb-4 h-14 w-auto sm:h-16" />
                <span className="font-serif text-[1.35rem] font-bold tracking-[0.16em] text-brand-gold sm:text-[1.75rem] sm:tracking-[0.19em] md:text-3xl md:tracking-[0.2em]">
                    BLACKLINE
                </span>
                <span className="mt-3 flex items-center gap-3">
                    <span className="hidden h-px w-6 bg-brand-gold/70 sm:block" aria-hidden />
                    <span className="font-sans text-[0.5625rem] font-semibold uppercase tracking-[0.22em] text-brand-white/88 sm:text-[0.625rem] sm:tracking-[0.24em]">
                        PUBLIC ADJUSTERS{" "}
                        <span className="font-medium text-brand-slate">LLC</span>
                    </span>
                    <span className="hidden h-px w-6 bg-brand-gold/70 sm:block" aria-hidden />
                </span>
                {showTagline ? (
                    <span className="mt-5 flex items-center gap-3">
                        <span className="h-px w-5 bg-brand-gold/50" aria-hidden />
                        <span className="font-sans text-[0.5rem] font-semibold uppercase tracking-[0.32em] text-brand-gold sm:text-[0.5625rem]">
                            POLICY. DEFINED. APPLIED.
                        </span>
                        <span className="h-px w-5 bg-brand-gold/50" aria-hidden />
                    </span>
                ) : null}
            </div>
        );
    }

    return (
        <div className={cn("flex items-center gap-3 sm:gap-3.5", className)}>
            <BlacklineMark className="h-10 w-auto shrink-0 sm:h-11 md:h-12" />
            <span className="hidden h-8 w-px shrink-0 bg-brand-gold/70 sm:block md:h-9" aria-hidden />
            <div className="flex min-w-0 flex-col items-start leading-none">
                <span className="font-serif text-[1.15rem] font-bold tracking-[0.14em] text-brand-gold sm:text-[1.45rem] sm:tracking-[0.17em] md:text-[1.65rem] md:tracking-[0.18em]">
                    BLACKLINE
                </span>
                <span className="mt-1.5 font-sans text-[0.5rem] font-semibold uppercase tracking-[0.18em] text-brand-white/88 sm:mt-[0.4rem] sm:text-[0.5625rem] sm:tracking-[0.2em] md:tracking-[0.22em]">
                    PUBLIC ADJUSTERS{" "}
                    <span className="font-medium text-brand-slate">LLC</span>
                </span>
            </div>
        </div>
    );
});

export default Logo;
