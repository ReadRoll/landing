import { isLocale, type Locale } from "@/i18n/locales";
import { routes, type RouteKey } from "@/i18n/routes";

type LinkNode = { url: string };
type VisitorContext = {
    fileURL?: URL;
    setField: (node: LinkNode, key: "url", value: string) => void;
};

const routePrefix = "route:";

function isRouteKey(value: string): value is RouteKey {
    return Object.hasOwn(routes, value);
}

/**
 * Returns the Markdown file's path, used to find its language and in error messages.
 * Sätteri may not provide the file, so error messages fall back to "unknown file" instead of "undefined".
 */
function getFilePath(fileURL: URL | undefined): string {
    return fileURL?.pathname ?? "unknown file";
}

/**
 * Returns the language of a Markdown file from its parent folder.
 * `…/legal/fr/LegalMention.md` → `fr`.
 * Fails the build if the file is not inside a locale folder (en/, fr/…).
 */
function getFileLocale(filePath: string): Locale {
    const folderName = filePath.split("/").at(-2);
    if (!isLocale(folderName)) {
        throw new Error(`Route links need a locale folder (en/, fr/…): ${filePath}`);
    }
    return folderName;
}

/**
 * Turns a Markdown route link into the page URL for the file's language.
 * `route:privacy` in `legal/fr/…` → `/fr/politique-confidentialite`.
 * Fails the build on an unknown route key.
 */
function resolveRouteUrl(url: string, filePath: string): string {
    const key = url.slice(routePrefix.length);
    if (!isRouteKey(key)) {
        throw new Error(`Unknown route "${key}" in ${filePath}`);
    }
    const locale = getFileLocale(filePath);
    return routes[key][locale];
}

export const markdownRouteLinks = {
    name: "markdown-route-links",
    link(node: LinkNode, ctx: VisitorContext) {
        if (!node.url.startsWith(routePrefix)) {
            return;
        }
        const filePath = getFilePath(ctx.fileURL);
        const url = resolveRouteUrl(node.url, filePath);
        ctx.setField(node, "url", url);
    },
};
