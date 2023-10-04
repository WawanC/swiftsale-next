import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/xxx/:path*"],
};

export function middleware(_: NextRequest) {
  // return NextResponse.rewrite(
  //   new URL(
  //     `${process.env.PROXY_URL}${request.nextUrl.pathname}${request.nextUrl.search}`,
  //   ),
  //   { request },
  // );
  return NextResponse.next();
}
