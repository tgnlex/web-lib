type Data = string | string[];

type Noop = () => void;
const noop: Noop = () => { return undefined;};

type Read = (data: Data) => Data;
const read: Read = (data: Data): Data => {
  console.log(data);
  return data;
};

type Length = (data: string) => number; 
const len: Length = (str: string): number  => {
  return str.length;
};

export {noop, read, length};

