interface Box<T> {
  name?: string;
  contents: T;
}
/* 
Example 1: 
const strBox: Box<string> {
  name: "string box",
  contents: "A string"
}
Example 2: 
type Bit = 0 | 1;
const bitBox: Box<Bit> {
  name: "Binary digit box",
  contents: 1,
}
*/
