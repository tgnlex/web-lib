function multiplyAll (
  values: number[] | undefined , 
  factor: number
): number[] | undefined {
  if (!values) {
    return values; 
  } else {
   values.map((x) => x * factor);
    return values;  
  }
} 
console.log(multiplyAll([3, 4], 6)); // [18, 24] 