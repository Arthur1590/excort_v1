import { NextRequest, NextResponse } from 'next/server';
import { setRequestLocale } from 'next-intl/server';
import { routing } from './i18n/routing';

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const locale = pathname.split('/')[1];

  if (locale === 'en' || locale === 'ru') {
    setRequestLocale(locale);
  } else {
    const defaultLocale = routing.defaultLocale || 'ru';
    const url = req.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/(ru|en)/:path*']
};