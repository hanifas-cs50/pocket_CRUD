import pb from './lib/pocketbase';
import { NextResponse } from 'next/server';
 
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const response = NextResponse.redirect(new URL('/table_input', request.url));
  async function fetchMessages() {
    const accounts = await pb.collection("accounts").getFullList({ sort: "created" });
    const categories = await pb.collection("categories").getFullList({ sort: "created" });
    const vendors = await pb.collection("vendors").getFullList({ sort: "created" });
    
    // Stringify the data before setting cookies
    response.cookies.set("accounts", JSON.stringify(accounts));
    response.cookies.set("categories", JSON.stringify(categories));
    response.cookies.set("vendors", JSON.stringify(vendors));
    
    return { accounts, categories, vendors };
  };
  const message = await fetchMessages();

  // if (request.nextUrl.pathname.startsWith('/home')) {}

  return response;
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/',
}