import type {HTTPHeaders} from './httpHeaders';
import {Cookies} from './cookie';
export enum RequestMethod {
GET "GET", 
POST "POST", 
PUT "PUT",
PATCH "PATCH", 
DELETE "DELETE",
TRACE "TRACE",
HEAD "HEAD",
}

export interface HTTPRequest {
  url: URL;
  method: RequestMethod;
  headers?: HTTPHeaders; 
  cookies?: Cookies;  
  data?: any;
}
