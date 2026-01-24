import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
}

const Logo = React.memo(function Logo({ className }: LogoProps) {
    return (
        <div className={cn("flex flex-col items-start leading-none", className)}>
            <span className="font-serif text-3xl font-bold tracking-[0.2em] text-brand-gold">
                BLACKLINE
            </span>
            <span className="font-sans text-[0.6rem] uppercase tracking-[0.4em] text-brand-slate mt-1">
                Adjusting LLC
            </span>
        </div>
    );
});

export default Logo;
