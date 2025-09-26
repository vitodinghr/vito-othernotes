/**
 * * Configuration of the i18n system data files and text translations
 * Example translations below are for English and French, with textTranslations used in src/layouts/BlogLayoutCenter.astro and src/components/Hero/[hero].astro
 */

/**
 * * Data file configuration for the i18n system
 * Every {Data} key must exist in the below object
 */
import navDataEn from "./en/navData.json";
import siteDataEn from "./en/siteData.json";
import navDataFr from "./fr/navData.json";
import siteDataFr from "./fr/siteData.json";

export const dataTranslations = {
	en: {
		siteData: siteDataEn,
		navData: navDataEn,
	},
	fr: {
		siteData: siteDataFr,
		navData: navDataFr,
	},
} as const;

/**
 * * Text translations are used with the `useTranslation` function from src/js/i18nUtils.ts to translate various strings on your site.
 *
 * ## Example
 *
 * ```ts
 * import { getLocaleFromUrl } from "@js/localeUtils";
 * import { useTranslations } from "@js/translationUtils";
 * const currLocale = getLocaleFromUrl(Astro.url);
 * const t = useTranslations(currLocale);
 * t("back_to_all_posts"); // this would be "Retour à tous les articles" if the current locale is "fr"
 * ```
 * or
 * ```ts
 * import { useTranslations } from "@js/translationUtils";
 * const t = useTranslations("fr");
 * t("back_to_all_posts"); // this would be "Retour à tous les articles"
 * ```
 */
export const textTranslations = {
	en: {
		hero_description:
			"Get your blog running in a snap. Multiple pages and sections, i18n, animations, CMS - all ready to go.",
		back_to_all_posts: "Back to all posts",
		related_posts: "Related Posts",
		share_this_post: "Share this post!",
		updated: "Updated",
		reading_time: "min read",
		table_of_contents: "Table of Contents",
	},
	fr: {
		hero_description:
			"Je ne parle pas vraiment français donc j'utilise Google Translate pour quelques parties de cette démo.",
		back_to_all_posts: "Retour à tous les articles",
		related_posts: "Articles Similaires",
		share_this_post: "Partager cette publication!",
		updated: "Mis à jour",
		reading_time: "min de lecture",
		table_of_contents: "Table des Matières",
	},
} as const;

/**
 * * Route translations are used to translate route names for the language switcher component
 * This can be useful for SEO reasons. The key does not matter, it just needs to match between languages
 *
 * These routes must be everything after the base domain. So if this is "atlas.com/blog", the route would be "blog"
 * Or if this is "atlas.com/legal/privacy", the route would be "legal/privacy"
 *
 * This also supports wildcards. For example, "categories/*" would match "categories/1" or "categories/2" etc for that language.
 *
 * Note: This works in conjunction with the localizedCollections object below
 */
export const routeTranslations = {
	en: {
		overviewKey: "overview",
		categoryKey: "categories",
		categoryKey2: "categories/*",
		categoryKey3: "categories",
		tagKey: "tags",
		tagKey2: "tags/*",
		tagKey3: "tags",
		blogKey: "blog",
	},
	fr: {
		overviewKey: "apercu",
		categoryKey: "categories",
		categoryKey2: "categories",
		categoryKey3: "categories/*",
		tagKey: "tags",
		tagKey2: "tags",
		tagKey3: "tags/*",
		blogKey: "blog",
	},
} as const;

/**
 * * Content collection translations used by the language switcher and hreflang generator
 *
 * Per-collection, per-locale route base mapping (collections to localize are the keys)
 *
 * If you have a key of "blog" then the blog content collection will be localized. This will look
 * for a "mappingKey" in the entry metadata, and use that to map the entry to the correct locale
 *
 * You can use the locale value to map the collection to a different route if desired
 */
export const localizedCollections = {
	blog: {
		en: "blog",
		fr: "blog",
	},
	// Add more collections/locales as needed
} as const;
