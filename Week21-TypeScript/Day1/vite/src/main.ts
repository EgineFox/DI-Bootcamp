/** type number */

let num: number = 15;
let a: number;
a = 1;

console.log(num);

/** type string */
let name1: string = 'John';

/**type boolean */
let bool: boolean = false;

/** type any */
let b: any;
b = 1;
b='b';
b = [];

/** type union */
let strNum: string | number = 'a';//
strNum = 1

/**array type */
let arr: string[] = ['a','b','c']
arr.push('d');
// dont arr.push(1);

let arr1: (string | number)[]

/**object type */
let obj: object = {}

obj = [] /** this is an object type, like a function */

/** type tuple */
let arrTuple: [string, number, string] = ["a", 1, 'b']

/** type / interface */
export type User = {
  name: string;
  age: number;
  gender?: string | number /** optional '?' */
}

let usertJohn: User = {
  name: 'John',
  age: 13,
  gender: ''
}

let userAnne: User = {
  name: 'Anna',
  age: 25,
  gender: ''
}

let arrUsers: User[] = [usertJohn, userAnne]

interface UserI { /**interface is an object */
  name: string;
  age: number;
  gender?: string | number /** optional '?' */
}