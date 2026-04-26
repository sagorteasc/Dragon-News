import { headers } from 'next/headers';
import { NextResponse } from 'next/server'
import { auth } from './lib/auth';

export async function proxy(request) {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (session) {
        // go to the request
        return NextResponse.next();
    }

    // go back from the request
    return NextResponse.redirect(new URL('/login', request.url))
}
export const config = {
    matcher: ['/career'],
}