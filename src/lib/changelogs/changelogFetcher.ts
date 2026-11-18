import { getCollection, type CollectionEntry } from "astro:content";
import type { Locale } from "@/i18n/locales";

const collectionName = "changeLogs";
export type Changelog = CollectionEntry<typeof collectionName>;

const byDateDesc = (a: Changelog, b: Changelog) => b.data.date.getTime() - a.data.date.getTime();

export async function getChangelogs(locale: Locale, limit?: number) {
    const isLocale = ({ id }: Changelog) => id.startsWith(`${locale}/`);
    const entries = await getCollection(collectionName, isLocale);
    return entries.sort(byDateDesc).slice(0, limit);
}
