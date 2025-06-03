// src/middleware.ts

// External libraries
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Daftar redirect sesuai permintaan
  const redirectMap: Record<string, string> = {
    "/merchandise": "/token/2",
    "/perpustakaan": "/token/1",
    "/bukabersama": "/token/10",
    "/kolektibel": "/paid",
    "/kolektibel/8": "/token/8",
  };

  const destination = redirectMap[pathname];
  if (destination) {
    return NextResponse.redirect(new URL(destination, request.url));
  }

  return NextResponse.next();
}
