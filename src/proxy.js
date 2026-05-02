import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'

// Use 'export default' so Next.js recognizes this as the main handler
export default async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return NextResponse.redirect(new URL('/signin', request.url))
  }

  // If session exists, allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ['/profile',"/all-tiles/:path"],
}