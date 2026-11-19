import en from "@/lib/i18n/translations/en.json";
import fr from "@/lib/i18n/translations/fr.json";
import type { Locale } from "@/lib/i18n/locales";

export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = { en, fr };

export function getDictionary(locale: Locale): Dictionary {
    return dictionaries[locale];
}

type Values = Record<string, string>;
export function interpolate(text: string, values: Values) {
    const replaceKey = (match: string, key: string) => values[key] ?? match;
    return text.replace(/\{(\w+)\}/g, replaceKey);
}
