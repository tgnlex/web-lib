export function logIdentity<Type>(arg: Type[]): Type[] {
	console.log(arg.length);
	return arg;
}