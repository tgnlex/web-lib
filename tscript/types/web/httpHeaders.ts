export class HTTPHeader {
  name: string;
  directives: string | string[] | "*";  
  type?: "Request" | "Response";
}

export type HTTPHeaders = HTTPHeader[] | HTTPHeader;