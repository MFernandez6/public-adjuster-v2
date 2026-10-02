import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
}

/** Gold B mark beside the BLACKLINE wordmark, both cut from the master logo artwork. */
const Logo = React.memo(function Logo({ className }: LogoProps) {
    return (
        <div className={cn("flex items-center gap-2.5 brightness-[1.2] sm:gap-3.5", className)}>
            <Image
                src="/brand/blackline-mark.png"
                alt=""
                width={626}
                height={272}
                priority
                className="h-9 w-auto shrink-0 select-none sm:h-10 lg:h-8 xl:h-10"
            />
            <Image
                src="/brand/blackline-wordmark.png"
                alt="Blackline Public Adjusters LLC"
                width={808}
                height={141}
                priority
                className="hidden h-7 w-auto shrink-0 select-none lg:block xl:h-10"
            />
        </div>
    );
});

export default Logo;
