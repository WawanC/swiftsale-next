import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/api/:path*"],
};

export function middleware(request: NextRequest) {
  return NextResponse.rewrite(
    new URL(
      `${process.env.PROXY_URL}${request.nextUrl.pathname}${request.nextUrl.search}`,
    ),
    { request },
  );
}
