export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string | undefined): value is Locale {
    const supported: readonly string[] = locales;
    return value !== undefined && supported.includes(value);
}

export function resolveLocale(value: string | undefined): Locale {
    return isLocale(value) ? value : defaultLocale;
}
