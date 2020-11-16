import { Person } from "./Person";
export class Student extends Person {
  constructor(name, className) {
    super(name);
    this.className = className;
  }
  study = () => {
    this.move();
    console.log(`${this.name} is studying in ${this.className}`);
  };
}

// export const getPoetry = async () => {
//   const response = await fetch("https://v1.jinrishici.com/all.json");

//   if (!response.ok) {
//     throw new Error(response.statusText);
//   }

//   const { origin, author, content } = await response.json();

//   return [origin, author, content];
// };