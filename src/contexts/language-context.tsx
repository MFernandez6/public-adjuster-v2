"use client";

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from "react";
import { dictionaries, type Locale } from "@/i18n/dictionaries";

const STORAGE_KEY = "blackline-locale";

function getNested(obj: unknown, path: string): string | undefined {
    const parts = path.split(".");
    let cur: unknown = obj;
    for (const p of parts) {
        if (cur === undefined || cur === null) return undefined;
        if (Array.isArray(cur)) {
            const idx = Number.parseInt(p, 10);
            if (!Number.isNaN(idx)) cur = cur[idx];
            else return undefined;
        } else if (typeof cur === "object" && p in (cur as object)) {
            cur = (cur as Record<string, unknown>)[p];
        } else return undefined;
    }
    return typeof cur === "string" ? cur : undefined;
}

type LanguageContextValue = {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>("en");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        try {
            const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
            if (stored === "es" || stored === "en") setLocaleState(stored);
        } catch {
            /* ignore */
        }
    }, []);

    useEffect(() => {
        if (!mounted) return;
        try {
            localStorage.setItem(STORAGE_KEY, locale);
        } catch {
            /* ignore */
        }
        document.documentElement.lang = locale === "es" ? "es" : "en";
    }, [locale, mounted]);

    const setLocale = useCallback((l: Locale) => setLocaleState(l), []);

    const t = useCallback(
        (key: string) => {
            const msg = getNested(dictionaries[locale], key);
            if (msg !== undefined) return msg;
            const fallback = getNested(dictionaries.en, key);
            return fallback ?? key;
        },
        [locale]
    );

    const value = useMemo(
        () => ({ locale, setLocale, t }),
        [locale, setLocale, t]
    );

    return (
        <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
    );
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
    return ctx;
}
