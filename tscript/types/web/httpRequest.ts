import type {HTTPHeaders} from './httpHeaders';
import {Cookies} from './cookie';
export type HTTPMethod = string 
  | "GET" 
  | "POST" 
  | "PUT" 
  | "PATCH" 
  | "DELETE"
  | "TRACE"
  | "HEAD";



export interface HTTPRequest {
  url: URL;
  method: HTTPMethod;
  headers?: HTTPHeaders; 
  cookies?: Cookies;  
  data?: any;
}