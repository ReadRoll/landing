declare namespace App {
    interface Locals {
        locale: import("@/i18n/locales").Locale;
        t: import("@/i18n/translator").Dictionary;
        paths: import("@/i18n/routes").LocalizedRoutes;
    }
}
