import type { Locale } from "@/i18n/locales";

export type HeadAlternates = Record<Locale | "x-default", string>;
export type AlternateLink = { hreflang: string; href: string };

function toAlternateLink(site: URL | undefined, [hreflang, path]: [string, string]): AlternateLink {
    const href = new URL(path, site).href;
    return { hreflang, href };
}

export function getAlternateLinks(headAlternates: HeadAlternates | undefined, site: URL | undefined): AlternateLink[] {
    const alternateEntries = headAlternates ? Object.entries(headAlternates) : [];
    return alternateEntries.map((entry) => toAlternateLink(site, entry));
}
