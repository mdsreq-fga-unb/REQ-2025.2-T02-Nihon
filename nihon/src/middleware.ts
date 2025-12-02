import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function middleware(request: NextRequest) {
  // só proteger rotas dentro de /auth/admin
  if (!request.nextUrl.pathname.startsWith("/auth/admin")) {
    return NextResponse.next();
  }

  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          // isso aqui corrige seu erro TS
          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options); // válido e tipado
          });
        },
      },
    }
  );

  const { data } = await supabase.auth.getUser();
  const user = data?.user;

  if (!user) {
    const url = request.nextUrl.clone();
    url.pathname = "/auth/login";
    return NextResponse.redirect(url);
  }

  return response;
}

export const config = {
  matcher: ["/auth/admin/:path*"],
};
