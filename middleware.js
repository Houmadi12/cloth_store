// middleware.js (à la racine du projet)
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // Rediriger vers la page de connexion si non authentifié
  if (!token) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }
  
  // Vérifier les permissions admin pour les routes admin
  if (pathname.startsWith('/admin') && token.role !== 'admin') {
    return NextResponse.redirect(new URL('/admin', req.url));
  }

  return NextResponse.next();
}

// Définir sur quelles routes le middleware s'applique
export const config = {
  matcher: ['/admin/:path*', '/products/:path*']
};