import { greet,Direction,move,moveAny ,identity} from "./direction";

greet("Hello World");
move(Direction.Up);
// move ("Down"); causes an error because "Down" is not a valid Direction enum value
moveAny("Left");
const a = identity<string>("This is a string");
// identity<number>("This is a string"); will cause an error because the type is not consistent
console.log(a); 
// a=6 causes an error because a is a string and cannot be assigned a number