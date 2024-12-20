import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from '@/i18n.config';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Sla statische bestanden over
  if (
    pathname.startsWith('/images/') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/_next/')
  ) {
    return;
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = i18n.defaultLocale;
    return NextResponse.redirect(
      new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url)
    );
  }
}

export const config = {
  // Matcher ignoring static files
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)'],
}; 