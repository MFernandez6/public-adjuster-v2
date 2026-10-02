"use client";

import { Moon, Sun } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useTheme } from "@/contexts/theme-context";

/** Compact sun/moon button for the navbar bar. */
export function ThemeIconToggle({ className = "" }: { className?: string }) {
    const { t } = useLanguage();
    const { theme, setTheme } = useTheme();
    const isLight = theme === "light";

    return (
        <button
            type="button"
            onClick={() => setTheme(isLight ? "dark" : "light")}
            aria-label={isLight ? t("nav.themeToggleToDark") : t("nav.themeToggleToLight")}
            title={isLight ? t("nav.themeToggleToDark") : t("nav.themeToggleToLight")}
            className={`flex h-8 w-8 items-center justify-center rounded-md border border-brand-white/15 bg-brand-navy/60 text-brand-slate transition-colors hover:border-brand-gold/40 hover:text-brand-gold ${className}`}
        >
            {isLight ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
        </button>
    );
}

/** Labeled Dark / Light choice for menus. */
export function ThemeSegmentedToggle() {
    const { t } = useLanguage();
    const { theme, setTheme } = useTheme();

    const pill =
        "flex items-center gap-1.5 rounded-md px-3 py-1.5 font-sans text-[9px] font-bold uppercase tracking-[0.2em] transition-colors";
    const on = "bg-brand-gold/20 text-brand-gold";
    const off = "text-brand-slate/70 hover:text-brand-white";

    return (
        <div
            className="inline-flex items-center gap-1 rounded-md border border-brand-white/15 bg-brand-navy/60 px-1 py-0.5"
            role="group"
            aria-label={t("nav.appearance")}
        >
            <button
                type="button"
                aria-pressed={theme === "dark"}
                onClick={() => setTheme("dark")}
                className={`${pill} ${theme === "dark" ? on : off}`}
            >
                <Moon className="h-3 w-3" />
                {t("nav.themeDark")}
            </button>
            <button
                type="button"
                aria-pressed={theme === "light"}
                onClick={() => setTheme("light")}
                className={`${pill} ${theme === "light" ? on : off}`}
            >
                <Sun className="h-3 w-3" />
                {t("nav.themeLight")}
            </button>
        </div>
    );
}
