// Ignore duplicate Identifier;
// @ts-ignore
function map<Input, Output>(array: Input[], func: (args: Input) => Output): Output[] {
  return array.map(func)
}