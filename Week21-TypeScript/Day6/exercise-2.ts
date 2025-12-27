function describeValue(a: number | string):  number | string {
  if (typeof a === "number") {
    return "This is a number"
  } 
  if (typeof a === "string") {
    return "This is a string"
  } 
   throw new Error(
    "Invalid arguments. Both arguments must be either numbers or strings."
   );
} 