import en from "@/i18n/translations/en.json";
import fr from "@/i18n/translations/fr.json";
import { type Locale } from "@/i18n/locales";

export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = { en, fr };

export function useTranslations(locale: Locale): Dictionary {
    return dictionaries[locale];
}
