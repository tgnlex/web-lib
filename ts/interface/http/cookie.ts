interface Cookie {
  name: string;
  value: string; 
  attributes?: string[];
}

interface CookieArray {
  cookies: Cookie[];
}

export {Cookie, CookieArray}
