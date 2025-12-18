type Person = {
    name: string,
    age: number
}

const createPerson = ( name: string, age: number) => {
    const newPerson: Person = {
        name: name,
        age: age
    }
    return newPerson;
}
//test function
const alise = createPerson('Alise', 25);
console.log(alise);
