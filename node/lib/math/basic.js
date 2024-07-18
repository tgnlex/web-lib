const add = (a, b) => {
  let c = a + b;
  return c;
};
const subtr = (a, b) => {
  let c = a - b;
  return c;
};
const mult = (a, b) => {
  let c = a * b;
  return c;
};
const divide = (a, b) => {
  let c = a / b;
  return c;
};
const increment = (value) => {
  value = value + 1;
  return value;
};
const decrement = (value) => {
  value = value - 1;
  return value;
};

const random = (max) => {
  const out = Math.floor(Math.random() * max);
  return out;
}


export {add, subtr, mult, divide, increment, decrement};