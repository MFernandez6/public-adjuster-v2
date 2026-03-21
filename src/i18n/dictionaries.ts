import { en } from "./en";
import { es } from "./es";

export const dictionaries = { en, es } as const;
export type Locale = keyof typeof dictionaries;
