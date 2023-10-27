import { getToken } from "next-auth/jwt";
import {
  NextMiddleware,
  NextFetchEvent,
  NextResponse,
  NextRequest,
} from "next/server";

const onlyAdmin = ["/admin"];

export default function withAuth(
  middleware: NextMiddleware,
  requireAuth: string[] = []
) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname; // ambil pathname dari request

    if (requireAuth.includes(pathname)) {
      // Jika array requireAuth mengandung pathname dari request, lanjutkan dengan memeriksa token.
      const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
      });
      // ambil token dari request dan secret yang disimpan di environment variable

      if (!token) {
        // Buat URL baru dengan path "/auth/login" dan base URL dari request (req.url). URL ini akan digunakan untuk redirect ke halaman login.
        const url = new URL("/auth/login", req.url);

        // menambahkan parameter callbackUrl yang berisi URL asli dari request
        url.searchParams.set("callbackUrl", encodeURI(req.url));
        // Parameter ini akan digunakan untuk mengembalikan pengguna ke halaman yang sebelumnya setelah proses login selesai.

        return NextResponse.redirect(url);
      }

      // Jika role pengguna bukan 'admin' dan pathname yang diminta hanya dapat diakses oleh admin, lanjutkan dengan redirect.
      if (token.role !== "admin" && onlyAdmin.includes(pathname)) {
        // Redirect ke halaman utama dengan menggunakan URL yang dibuat dengan path '/' dan base URL dari request
        return NextResponse.redirect(new URL("/", req.url));
      }
    }

    return middleware(req, next);
    // Jika token ada atau tidak diperlukan autentikasi untuk pathname, jalankan middleware yang diberikan.
  };
}
