import { defineMiddleware } from "astro:middleware";
import { resolveLocale } from "@/i18n/locales";
import { useTranslations } from "@/i18n/translator";
import { getLocalizedRoutes } from "@/i18n/routes";

export const onRequest = defineMiddleware((context, next) => {
    const locale = resolveLocale(context.currentLocale);
    context.locals.locale = locale;
    context.locals.t = useTranslations(locale);
    context.locals.paths = getLocalizedRoutes(locale);
    return next();
});
