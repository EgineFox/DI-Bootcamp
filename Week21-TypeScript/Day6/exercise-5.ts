interface HasLength {
    length: number;
}


function logLength<T extends HasLength>(item: T): void {
    console.log(item.length);
}

logLength("Hello");           // 5
logLength([1, 2, 3, 4]);      // 4
logLength([10, 20]);          // 2
logLength("TypeScript");      // 10