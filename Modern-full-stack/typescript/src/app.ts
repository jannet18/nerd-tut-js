// // function sayHi(humanName: string) {
// //   alert(`Hello ${humanName}`);
// // }
// // sayHi("Janet");

// // let age: number = 20;
// // if (age < 50) age += 10;
// // console.log(age);

// type Employee = {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// };
// let employee: Employee = {
//   id: 1,
//   name: "Janet",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// // union types
// function kgToLbs(weight: number | string): number {
//   // type narrowing
//   if (typeof weight === "number") {
//     return weight * 2.2;
//   } else {
//     return parseInt(weight) * 2.2;
//   }
// }
// kgToLbs("10Kg");
// kgToLbs(10);

// // type intersection
// type Draggable = {
//   drag: () => void;
// };

// type Resizable = {
//   resize: () => void;
// };

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//   drag: () => {},
//   resize: () => {},
// };

// // literal types (exact ,specific value)
// type Quantity = 15 | 100;
// let quantity: Quantity = 100;
// type Metric = "cm" | "inch";

//  Type aliases
// let myMathFunction: (num1: number, num2: number) => string;

// function add(n1: number, n2: number): string {
//   return "" + n1 + n2;
// }
// myMathFunction = add;
// console.log(add(5, 6));

// Member visibility / public
// class Greeter {
//   public greet() {
//     console.log("hi");
//   }
// }
// const g = new Greeter();
// g.greet();

// protected
// class Greeter {
//   public greet() {
//     console.log("hi, " + this.getName());
//   }
//   protected getName() {
//     return "hi";
//   }
// }

// class SpecialGreeter extends Greeter {
//   public howdy() {
//     console.log("Howdy, " + this.getName());
//   }
// }

// const g = new SpecialGreeter();
// g.greet();
// g.getName();

// inheritance

// class Person {
//   constructor(name: string) {
//     console.log(name + "Person constructor.");
//   }
//   getID() {
//     return 10;
//   }
// }

// class Employee extends Person {
//   constructor(name: string) {
//     super(name);
//     console.log(name + "employee constructor");
//   }
// }
// let e = new Employee("chandler");
// console.log(e.getID());

// getter and setter methods
class Student {
  public name: string;
  private semester: number;
  private course: string;

  constructor(name: string, semester: number, course: string) {
    this.name = name;
    this.semester = semester;
    this.course = course;
  }
  public getName() {
    return this.name;
  }
  public setName(name: string) {
    this.name = name;
  }
  public getSemester() {
    return this.semester;
  }
  public setSemester(semester: number) {
    this.semester = semester;
  }
  getCourse() {
    return this.course;
  }

  setCourse(course: string) {
    this.course = course;
  }
}

let student = new Student("Mandi", 2, "Soci");
console.log(student);

// static members
class Planet {
  static theBorgLiveHere: boolean = true;
}
alert(Planet.theBorgLiveHere);
