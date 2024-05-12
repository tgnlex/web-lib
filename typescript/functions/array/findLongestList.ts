function longestList<Type extends {length: number}>(a: Type, b: Type) {
  if (a.length >= b.length) {
    console.log(`List ${a} is the longest`)
    return a;
  }  
  else if (b.length >= a.length) {
    console.log(`List ${b} is the longest`)
    return b;
  }
  else if (a.length == b.length) {
    console.log("Both Items Are of Equal Length");
    return null;
  } else {
    let error = new Error;
    console.error('An error has occured, please verify that both inputs are Arrays.')
    return error;
  }
}