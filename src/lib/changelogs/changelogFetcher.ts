import { getCollection } from "astro:content";
import type { Locale } from "@/lib/i18n/locales";
import { changelogCollection, type Changelog } from "@/lib/changelogs/changelogTypes";

const byDateDesc = (a: Changelog, b: Changelog) => b.data.date.getTime() - a.data.date.getTime();
export async function getChangelogs(locale: Locale, limit?: number) {
    const isLocale = ({ id }: Changelog) => id.startsWith(`${locale}/`);
    const entries = await getCollection(changelogCollection, isLocale);
    return entries.sort(byDateDesc).slice(0, limit);
}
