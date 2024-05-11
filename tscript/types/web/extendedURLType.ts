
export type URLSCHEME = string 
| "https://" 
| "http://"
| "api://" 
| "data://" 
| "file://" 
| "ftp://" 
| "ssh://" 
| "ws://" 
| "wss://"; 

export type TopDomain = ".com" | ".org" | ".gov" | ".blog" | ".info" | ".shop" | ".co" | ".net" | ".win";

export type IPAddress = string;
export type Local = "localhost"
;
export interface QueryParam {
  key: string;
  value: string;
}
export interface QueryString {
  params: QueryParam[] |  QueryParam;
} 
export interface Domain {
  sub?: string; 
  main: string;
  top: TopDomain; 
}

export interface URL {
  scheme: URLSCHEME;
  domain: Domain | Local | IPAddress;
  port?: number;
  path?: string;
  query?: QueryString;
  fragment?: string;
}


