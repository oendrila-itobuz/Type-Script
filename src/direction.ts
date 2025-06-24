//function basic
export const greet = (name: string): void => console.log(`Hello, ${name}!`);
// Enum 
export enum Direction {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right"
}

export const move=(direction: Direction): void => {
  console.log(`Moving ${direction}`);
}
//type any (not recommended)
export const moveAny = (direction: any): void => {
  console.log(`Moving ${direction}`);
}
//optional parameter might or might not be passed
export const moveOptional = (direction: Direction, speed?: number): void => {
  if (speed) {
    console.log(`Moving ${direction} at speed ${speed}`);
  } else {
    console.log(`Moving ${direction}`);
  }
} 
//generic function the function can accept any type of argument
//and return the same type of argument
//this is useful when you want to create a function that can work with any type of data
//but the type will be constant throughout the function execution 
export const identity = <T>(arg: T): T => {
  return  arg;
}

//ts in mixins 

type Constructor<T = {}> = new (...args: any[]) => T;
class Naming {
  constructor(public name: string) {}
}

function mixin<T extends Constructor<Naming>>(Base: T) {
  return class extends Base {
    getName() {
      return `Name is: ${this.name}`;
    }
  };
}
const MixedNaming = mixin(Naming);
const output = new MixedNaming("John Doe");
console.log(output.getName()); 

let age = 30;
let newAge: typeof age; // newAge is of type number(captures the type of age)

//const captures both type and value
const greeting = "Hello World";
let message: typeof greeting;
message = "Hello World";     //  OK
// message = "Hi there!";       Error: Only "Hello World" is allowed

const colors = {
  red: 'reddish',
  blue: 'bluish',
};

type ColorsObject = typeof colors;

// type ColorsObject = {
//   red: string;
//   blue: string;
// };

let colorSet: ColorsObject = {
  red: 'bright red',
  blue: 'deep blue'
};

// Keys as union type
type ColorKeys = keyof typeof colors;
// type ColorKeys = 'red' | 'blue';

let colorName: ColorKeys;

colorName = 'red';     
// colorName = 'green'; error

//interface
interface Person {
  name: string;
  greet(): void;
}

const p: Person = {
  name: 'Bob',
  greet() {
    console.log(`Hello, ${this.name}`);
  }
};

p.greet(); 

type UserID = number | string;
let newId: UserID = 'abc123';

//conditional types
type IsString<T> = T extends string ? 'Yes' : 'No';
type Result1 = IsString<string>; // 'Yes'
type Result2 = IsString<number>; // 'No'

type ReadOnly<T> = { readonly [P in keyof T]: T[P] };

interface User {
  id: number;
  name: string;
}
type ReadOnlyUser = ReadOnly<User>;
const user: ReadOnlyUser = {
  id: 1,
  name: 'Alice'
};
// user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property
// user.name = 'Bob';
