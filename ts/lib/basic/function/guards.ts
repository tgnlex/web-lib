type Bit = 0 | 1;
function stringGuard(x: any): x is string {
  if (typeof x === "string") {
    console.log(x);
    return x;
  } else {
    throw new Error(`Type Error: Function only accepts string types.`)
  }
};

function numGuard(x: any): x is number {
  if (typeof x === "number") {
    console.log(x);
    return x;
  } else {
    throw new Error(`Type Error: Function only accepts number types.`)
  }
};

function bitGuard(x: any): x is number {
  if (x === 0 || x === 1) {
    console.log(x);
    return x;
  } else {
    throw new Error(`Type Error: Function only accepts a Bit type (Bit: number type with a value of 0 or 1)`)
  }
};
function boolGuard(x: any): x is boolean {
  if (typeof x === "boolean") {
    console.log(x);
    return x;
  } else {
    throw new Error(`Type Error: Function only accepts boolean types.`)
  }
};
export {stringGuard, numGuard, bitGuard, boolGuard};
