function filterList<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}