import tailwindcss from "@tailwindcss/vite";
import { satteri } from "@astrojs/markdown-satteri";
import { defineConfig, fontProviders } from "astro/config";
import { defaultLocale, locales } from "@/i18n/locales.ts";
import { markdownRouteLinks } from "@/lib/markdownRouteLinks.ts";

const watchI18nFiles = {
    name: "watch-i18n-files",
    hooks: {
        "astro:config:setup": ({ addWatchFile }) => {
            addWatchFile(new URL("./src/i18n/routes.ts", import.meta.url));
            addWatchFile(new URL("./src/i18n/locales.ts", import.meta.url));
        },
    },
};

export default defineConfig({
    site: "https://readroll.xyz",
    trailingSlash: "ignore",
    i18n: {
        defaultLocale,
        locales: [...locales],
        routing: { prefixDefaultLocale: false },
    },
    integrations: [watchI18nFiles],
    markdown: {
        processor: satteri({
            mdastPlugins: [markdownRouteLinks],
        }),
    },
    vite: {
        plugins: [tailwindcss()],
    },
    fonts: [
        {
            provider: fontProviders.google(),
            name: "Libre Baskerville",
            cssVariable: "--font-libre-baskerville",
            weights: ["400 700"],
            styles: ["normal", "italic"],
            subsets: ["latin"],
            formats: ["woff2"],
            fallbacks: ["serif"],
        },
        {
            provider: fontProviders.google(),
            name: "Manrope",
            cssVariable: "--font-manrope",
            weights: ["400 700"],
            styles: ["normal"],
            subsets: ["latin"],
            formats: ["woff2"],
            fallbacks: ["sans-serif"],
        },
    ],
});
