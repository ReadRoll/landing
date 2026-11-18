import type { Locale } from "@/lib/i18n/locales";

const dateOptions: Intl.DateTimeFormatOptions = { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" };
export function formatChangelogDate(date: Date, locale: Locale) {
    return date.toLocaleDateString(locale, dateOptions);
}
