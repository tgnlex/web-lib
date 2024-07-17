type Data = string | string[];

type StrFunc = (data: Data) => void;

type Read = (data: Data) => Data

type Length = (data: string) => number;


export type {StrFunc, Read, Length}
