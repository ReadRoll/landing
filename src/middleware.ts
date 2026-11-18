import { defineMiddleware } from "astro:middleware";
import { resolveLocale } from "@/lib/i18n/locales";
import { getDictionary } from "@/lib/i18n/translator";
import { getLocalizedRoutes } from "@/lib/i18n/routes";

export const onRequest = defineMiddleware((context, next) => {
    const locale = resolveLocale(context.currentLocale);
    context.locals.locale = locale;
    context.locals.t = getDictionary(locale);
    context.locals.paths = getLocalizedRoutes(locale);
    return next();
});
