import { defineRouting } from "next-intl/routing";

export type Pathnames = {
  "/": { az: string; en: string; ru: string };
  "/about": { az: string; en: string; ru: string };
  "/contact": { az: string; en: string; ru: string };
  "/services": { az: string; en: string; ru: string };
};
export const routing = defineRouting({
  locales: ["az", "en", "ru"],
  defaultLocale: "az",
  localePrefix: "as-needed",
  localeDetection: false,
  pathnames: {
    "/": {
      az: "/",
      en: "/",
      ru: "/",
    },
    "/about": {
      az: "/haqqimizda",
      en: "/about",
      ru: "/o-nas",
    },
    "/contact": {
      az: "/elaqe",
      en: "/contact",
      ru: "/kontakti",
    },
    "/services": {
      az: "/xidmetler",
      en: "/services",
      ru: "/uslugi",
    },
    "/services/[slug]": {
      az: "/xidmetler/[slug]",
      en: "/services/[slug]",
      ru: "/uslugi/[slug]",
    },
    "/blogs": {
      az: "/bloqlar",
      en: "/blogs",
      ru: "/bloqi",
    },
    "/blogs/[slug]": {
      az: "/bloqlar/[slug]",
      en: "/blogs/[slug]",
      ru: "/bloqi/[slug]",
    },
    "/media": {
      az: "/media",
      en: "/media",
      ru: "/media",
    },
    "/certificates": {
      az: "/sertifikatlar",
      en: "/certificates",
      ru: "/sertifikati",
    },
    "/photo-gallery": {
      az: "/foto-qalereya",
      en: "/photo-gallery",
      ru: "/photo-gallery",
    },
    "/video-gallery": {
      az: "/video-qalereya",
      en: "/video-gallery",
      ru: "/video-qallery",
    },
    "/educrm": {
      az: "/educrm",
      en: "/educrm",
      ru: "/educrm",
    },
    "/qrmenu": {
      az: "/qrmenu",
      en: "/qrmenu",
      ru: "/qrmenu",
    },
  },
});

