export interface HTTPHeader {
  name: string;
  directives: string | string[] | "*";  
  type?: "Request" | "Response";
}

