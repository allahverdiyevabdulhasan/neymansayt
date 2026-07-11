import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";
import createMiddleware from "next-intl/middleware";

const i18nMiddleware = createMiddleware(routing);

export default function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap") ||
    pathname.startsWith("/manifest.json") ||
    pathname.startsWith("/.well-known") ||
    pathname.startsWith("/auth")
  ) {
    return NextResponse.next();
  }

  // Admin panel route'ları
  if (pathname.startsWith("/manage")) {
    const response = NextResponse.next();
    response.headers.set("x-pathname", pathname);
    response.headers.set(
      "Cache-Control",
      "private, no-cache, no-store, max-age=0, must-revalidate"
    );
    return response;
  }

  // Geolocation detection to set default locale
  const hasLocaleCookie = req.cookies.has('NEXT_LOCALE');
  
  if (!hasLocaleCookie && pathname === '/') {
      let country = req.headers.get('x-vercel-ip-country') || req.headers.get('cf-ipcountry');
      let localeToSet = routing.defaultLocale;
      
      if (country) {
          if (country === 'TR') localeToSet = 'tr';
          else if (country === 'AZ') localeToSet = 'az';
          else if (['RU', 'BY', 'KZ', 'UZ', 'KG'].includes(country)) localeToSet = 'ru';
          else if (['US', 'GB', 'CA', 'AU'].includes(country)) localeToSet = 'en';
      } else {
          const acceptLanguage = req.headers.get('accept-language');
          if (acceptLanguage) {
              if (acceptLanguage.includes('tr')) localeToSet = 'tr';
              else if (acceptLanguage.includes('az')) localeToSet = 'az';
              else if (acceptLanguage.includes('ru')) localeToSet = 'ru';
              else if (acceptLanguage.includes('en')) localeToSet = 'en';
          }
      }

      if (localeToSet !== routing.defaultLocale) {
           req.headers.set('accept-language', localeToSet);
      }
  }

  const response = i18nMiddleware(req);
  response.headers.set("x-pathname", pathname);

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\..*).*)"],
};
