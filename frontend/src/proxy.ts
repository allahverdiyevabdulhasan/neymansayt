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

  const response = i18nMiddleware(req);
  response.headers.set("x-pathname", pathname);

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\..*).*)"],
};
