import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function middleware(request: NextRequest) {
  const { cookies } = request;

  const user = {
    username: cookies.get('username')?.value,
    jobtitle: cookies.get('jobtitle')?.value,
  };

  if (
    request.nextUrl.pathname.startsWith('/info') &&
    (!user.username || !user.jobtitle)
  ) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  return NextResponse.next();
}
