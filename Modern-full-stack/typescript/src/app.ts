// function sayHi(humanName: string) {
//   alert(`Hello ${humanName}`);
// }
// sayHi("Janet");

// let age: number = 20;
// if (age < 50) age += 10;
// console.log(age);

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};
let employee: Employee = {
  id: 1,
  name: "Janet",
  retire: (date: Date) => {
    console.log(date);
  },
};

// union types
function kgToLbs(weight: number | string): number {
  // type narrowing
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}
kgToLbs("10Kg");
kgToLbs(10);

// type intersection
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// literal types (exact ,specific value)
type Quantity = 15 | 100;
let quantity: Quantity = 100;
type Metric = "cm" | "inch";
