import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { nextUrl } = request;

  // Handle root redirect (e.g. `/` → `/id`)
  if (nextUrl.pathname === "/") {
    const locale = routing.defaultLocale || "id";
    return Response.redirect(new URL(`/${locale}`, request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/", "/(id|en|zh)/:path*"],
};
