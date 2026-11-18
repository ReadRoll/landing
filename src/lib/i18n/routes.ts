import type { Locale } from "@/lib/i18n/locales";

export type LocalizedRoutes = Record<RouteKey, string>;
export type LocalizedPath = Record<Locale, string>;
export type RouteKey = keyof typeof routes;

export const routes = {
    home: { en: "/", fr: "/fr/" },
    changelogs: { en: "/changelogs", fr: "/fr/nouveautes" },
    legal: { en: "/legal", fr: "/fr/mentions-legales" },
    privacy: { en: "/privacy", fr: "/fr/politique-confidentialite" },
    terms: { en: "/terms-of-service", fr: "/fr/conditions-utilisation" },
} satisfies Record<string, LocalizedPath>;

export function isRouteKey(value: string): value is RouteKey {
    return Object.hasOwn(routes, value);
}

export function getLocalizedRoutes(locale: Locale): LocalizedRoutes {
    const entries = Object.entries(routes).map(([key, paths]) => [key, paths[locale]]);
    return Object.fromEntries(entries) as LocalizedRoutes;
}
