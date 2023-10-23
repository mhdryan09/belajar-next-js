import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const isLogin = true;

  if (isLogin) {
    return NextResponse.next(); // akan di teruskan ke proses berikutnya
  } else {
    return NextResponse.redirect(new URL("/auth/login", req.url)); // redirect halaman ke login
  }
}

export const config = {
  matcher: ["/product", "/about"], // ketika akses halaman ini, maka akan di arahkan ke root
};
// matcher : url mana yang dituju
