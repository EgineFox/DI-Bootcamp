function getFirstElement(a: (number | string)[] ): string {
    return a[0] as string;
}

console.log(getFirstElement(["hello", 1, 2]));        // "hello"
console.log(getFirstElement(["world", "test", 3]));   // "world"
console.log(getFirstElement([42, "oops"]));           // 42 