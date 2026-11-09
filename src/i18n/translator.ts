import en from "@/i18n/en.json";
import fr from "@/i18n/fr.json";
import { defaultLocale, locales, type Locale } from "@/i18n/locales";

export type Dictionary = typeof en;
export { defaultLocale, locales, type Locale };

const dictionaries: Record<Locale, Dictionary> = { en, fr };

export function isLocale(value: string | undefined): value is Locale {
    const supported: readonly string[] = locales;
    return value !== undefined && supported.includes(value);
}

export function useTranslations(locale: string | undefined): Dictionary {
    const resolved = isLocale(locale) ? locale : defaultLocale;
    return dictionaries[resolved];
}
