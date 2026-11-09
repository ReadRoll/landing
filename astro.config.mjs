import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import { defaultLocale, locales } from "@/i18n/locales.ts";

export default defineConfig({
    site: "https://readroll.xyz",
    trailingSlash: "ignore",
    i18n: {
        defaultLocale,
        locales: [...locales],
        routing: { prefixDefaultLocale: false },
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
