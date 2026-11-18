import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField, fontProviders } from "astro/config";
import { defaultLocale, locales } from "@/lib/i18n/locales.ts";
import mdx from "@astrojs/mdx";

export default defineConfig({
    site: "https://readroll.xyz",
    env: {
        schema: {
            APP_SIGN_IN_URL: envField.string({ context: "client", access: "public", url: true }),
        },
    },
    trailingSlash: "ignore",
    i18n: {
        defaultLocale,
        locales: [...locales],
        routing: { prefixDefaultLocale: false },
    },
    integrations: [mdx()],
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
