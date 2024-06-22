// Ignore duplicate Identifier;
// @ts-ignore
function map<Input, Output>(array: Input[], func: (args: Input) => Output): Output[] {
  return array.map(func)
}

function parse(array) {
  const parsed = map([array], (n) => parseInt(n));
  return parsed;
}