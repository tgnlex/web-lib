function identity<Type>(arg: Type): Type {
	return arg;
}

function logIdentity<Type>(arg: Type[]): Type[] {
	console.log(arg.length);
	return arg;
}

