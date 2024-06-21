
export enum URLPrefix { 
  Https "https://", 
  Http "http://",
  Api "api://",
  Data "data://",
  File "file://",
  Ftp "ftp://",
  Ssh "ssh://",
  Ws "ws://",
  Wss "wss://", 
}
export enum TopDomain {
  Com ".com",
  Org ".org", 
  Gov ".gov", 
  Blog ".blog", 
  Info ".info", 
  Shop ".shop", 
  Co ".co", 
  Net ".net", 
  Win ".win";
}
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
  domain: Domain | string | "localhost" |
  port?: number;
  path?: string;
  query?: QueryString;
  fragment?: string;
}


