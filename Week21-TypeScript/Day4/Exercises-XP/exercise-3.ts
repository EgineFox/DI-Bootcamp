class Animal {
    constructor(
        public name: string,
    ) {}

    makeSound(): string {
        return "Some generic animal sound";
    };
}

class Dog extends Animal {
    makeSound(): string {
        return "bark";
    }
}

const myDog = new Dog('Flaffy');

console.log(myDog.name);
console.log(myDog.makeSound());

const genericAnimal = new Animal("NLO");
console.log(genericAnimal.makeSound);


