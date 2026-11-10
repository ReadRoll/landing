import { defineMiddleware } from "astro:middleware";
import { resolveLocale } from "@/i18n/locales";
import { getDictionary } from "@/i18n/translator";
import { getLocalizedRoutes } from "@/i18n/routes";

export const onRequest = defineMiddleware((context, next) => {
    const locale = resolveLocale(context.currentLocale);
    context.locals.locale = locale;
    context.locals.t = getDictionary(locale);
    context.locals.paths = getLocalizedRoutes(locale);
    return next();
});
