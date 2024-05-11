import type {HTTPHeaders} from './httpHeaders';
import {Cookies} from './cookie';

export interface HTTPResponse {
  url: URL;
  headers?: HTTPHeaders;
  cookies?: Cookies;   
  data?: any;
}