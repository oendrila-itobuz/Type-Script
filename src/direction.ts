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
