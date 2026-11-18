import { sectionIds } from "@/lib/navigation/landingSection";

export function getNavigationLinks({ t, paths }: App.Locals) {
    return [
        { label: t.site.navigation.features, href: `${paths.home}#${sectionIds.features}` },
        { label: t.site.navigation.changelogs, href: `${paths.home}#${sectionIds.changelogs}` },
        { label: t.site.navigation.faq, href: `${paths.home}#${sectionIds.faq}` },
    ];
}
