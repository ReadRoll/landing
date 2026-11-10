import { defaultLocale, type Locale } from "@/i18n/locales";
import type { LocalizedPath } from "@/i18n/routes";

export type AlternateLink = { hreflang: string; href: string };

function toAlternateLink(hreflang: string, path: string, site: URL | undefined): AlternateLink {
    const href = new URL(path, site).href;
    return { hreflang, href };
}

export function getAlternateLinks(paths: LocalizedPath, site: URL | undefined): AlternateLink[] {
    const localeLinks = Object.entries(paths).map(([locale, path]) => toAlternateLink(locale, path, site));
    const defaultLink = toAlternateLink("x-default", paths[defaultLocale], site);
    return [...localeLinks, defaultLink];
}
