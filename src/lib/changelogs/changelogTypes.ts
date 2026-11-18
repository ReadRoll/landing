import type { CollectionEntry } from "astro:content";

export const changelogCollection = "changelogs";

export type Changelog = CollectionEntry<typeof changelogCollection>;
export type ChangelogType = Changelog["data"]["type"];
