declare namespace App {
    interface Locals {
        locale: import("@/lib/i18n/locales").Locale;
        t: import("@/lib/i18n/translator").Dictionary;
        paths: import("@/lib/i18n/routes").LocalizedRoutes;
    }
}
