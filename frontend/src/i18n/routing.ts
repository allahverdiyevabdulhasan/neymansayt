import { defineRouting } from "next-intl/routing";

export type Pathnames = {
  "/": { az: string; en: string; ru: string; tr: string };
  "/about": { az: string; en: string; ru: string; tr: string };
  "/contact": { az: string; en: string; ru: string; tr: string };
  "/services": { az: string; en: string; ru: string; tr: string };
};
export const routing = defineRouting({
  locales: ["az", "en", "ru", "tr"],
  defaultLocale: "az",
  localePrefix: "as-needed",
  localeDetection: false,
  pathnames: {
    "/": {
      az: "/",
      en: "/",
      ru: "/",
      tr: "/",
    },
    "/about": {
      az: "/haqqimizda",
      en: "/about",
      ru: "/o-nas",
      tr: "/hakkimizda",
    },
    "/contact": {
      az: "/elaqe",
      en: "/contact",
      ru: "/kontakti",
      tr: "/iletisim",
    },
    "/services": {
      az: "/xidmetler",
      en: "/services",
      ru: "/uslugi",
      tr: "/hizmetler",
    },
    "/services/[slug]": {
      az: "/xidmetler/[slug]",
      en: "/services/[slug]",
      ru: "/uslugi/[slug]",
      tr: "/hizmetler/[slug]",
    },
    "/blogs": {
      az: "/bloqlar",
      en: "/blogs",
      ru: "/bloqi",
      tr: "/bloglar",
    },
    "/blogs/[slug]": {
      az: "/bloqlar/[slug]",
      en: "/blogs/[slug]",
      ru: "/bloqi/[slug]",
      tr: "/bloglar/[slug]",
    },
    "/media": {
      az: "/media",
      en: "/media",
      ru: "/media",
      tr: "/media",
    },
    "/certificates": {
      az: "/sertifikatlar",
      en: "/certificates",
      ru: "/sertifikati",
      tr: "/sertifikalar",
    },
    "/photo-gallery": {
      az: "/foto-qalereya",
      en: "/photo-gallery",
      ru: "/photo-gallery",
      tr: "/foto-galeri",
    },
    "/video-gallery": {
      az: "/video-qalereya",
      en: "/video-gallery",
      ru: "/video-qallery",
      tr: "/video-galeri",
    },
  },
});

