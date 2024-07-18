type Data = string | string[];
type Read = (data: Data) => Data;
type Length = (data: string) => number; 

const read: Read = (data: Data): Data => {
  console.log(data);
  return data;
};

const len: Length = (str: string): number  => {
  return str.length;
};

export {read, length};
