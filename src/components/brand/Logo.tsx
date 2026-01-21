import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
}

export default function Logo({ className }: LogoProps) {
    return (
        <div className={cn("flex flex-col items-start leading-none", className)}>
            <span className="font-serif text-3xl font-bold tracking-[0.2em] text-brand-gold">
                IRONCLAUSE
            </span>
            <span className="font-sans text-[0.6rem] uppercase tracking-[0.4em] text-brand-slate mt-1 self-center w-full text-center">
                Adjusting LLC
            </span>
        </div>
    );
}
