/**Classes */

import { log } from "console";

class User {
    public name: string;
    private age: number;
    protected active: boolean; // the class & subclass
    constructor(name, age, active) {
        this.name = name;
        this.age = age;
        this.active = active;
    }
    getAge(): number {
        /** by auth user */
        return this.age
    }
    setAge(value: number) {
        this.age = value;
    }
    get _active(): boolean {
        return this.active
    }
    set _active(value: boolean) {
        this.active = value
    }
}

const userJohn = new User('John', 27, true);
userJohn.name
userJohn.name = 'Anne'

userJohn.setAge(28);

userJohn._active;
userJohn._active = false;

class Student extends User {
    public gender: string;
    constructor( name: string, age: number, active: boolean) {
        super(name, age, active);
        this.gender = this.gender;
    }
    getStudentAge(): string {
        return this.name + 'is' + this.getAge()
    }
    getStudentIsActive() : string {
        return this.name + ' is ' + this.active
    }
}

const studentAnne = new Student ( 'Anne', 25, true, "F")
studentAnne.name
studentAnne.gender

class Student1 {
    name: string;
    static counter: number = 0;
    id: number;
    constructor(name: string) {
        this.name = name;
        this.id = ++Student1.counter
    }
}

const studentOne = new Student1('John');
console.log(studentOne, studentOne.id);

const studentTwo = new Student1('Anne');
console.log(studentTwo, studentTwo.id);
const studentThre = new Student1('Dan');
console.log(studentThre, studentThre.id);

/** implement type / interface to Class */
type User1 = {
    name: string;
    age: number;
    getAge() : number;
    setAge( value: number) : void;
}

class Employee implements User1 {
    name: string;
    age: number
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getAge(): number {
        return this.age
    }
    setAge(value: number): void {
        this.age = value;
    }
}

/**Generics */

const strEcho = (value: string): string => value;
const numEcho = (value: number): number => value;

const echo = <T>(value: T): T=> value

echo<string>("abc")
echo<number>(11)
echo<string | number>(1)

type Book {
    title: string
    isbn: string
}

const myBook: Book = {
    title: "Typescript",
    isbn: "123-+456"
}

echo<Book>(myBook)

const getFirstElement = <T>(arr:T[] ): T => {
    return arr[0]
}

getFirstElement<number>([1,2,3])
getFirstElement<string>(['1','2','3'])

getFirstElement<Book>([myBook, myBook])

interface Person<T> {
    name: string;
    age: number;
    info: T
}

const person1: Person<number[]> = {
    name: '111',
    age: 1,
    info: [1,2,3,4]
}
const person2: Person<(string | number)[]> = {
    name: '111',
    age: 1,
    info: ['1','2',3,'4']
}

const mergeArrays = <T ,K > ( arr1: T[], arr2: K[]): (T | K) [] => {
    return [...arr1, ...arr2]
}
 mergeArrays([1,2,3], ['1','2', '3'])