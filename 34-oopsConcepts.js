// OOPs Concepts in JavaScript

// JavaScript supports OOP using:
//     class
//     constructor
//     extends
//     super
//     getters/setters

// The 4 main OOPs concepts are:
//     Encapsulation
//     Abstraction
//     Inheritance
//     Polymorphism

//1️⃣ Encapsulation in JavaScript
//Encapsulation means hiding internal data and exposing it via methods.

// class worldBank{
//     #balance = 50000
//     bal = 10000

//     getBalance(){
//         return this.#balance
//     }
// }

// let wb = new worldBank()
// console.log(wb.getBalance())
// //console.log(sb.#balance)
// console.log(wb.bal)


// Why Encapsulation is Important
//      ✔ Prevents direct data access
//      ✔ Improves security
//      ✔ Controls modification


// 2️⃣ Abstraction in JavaScript
// Abstraction means showing what an object does, not how it does it.

// JS doesn’t have true abstract classes, but we simulate them.

class worldbank{
    getInterestRate(){
        return "method not implemented in child class"
      
    }
}

class SBI extends worldbank{
    getInterestRate(){
        return 6.5
    }
}



let w = new worldbank()
console.log(w.getInterestRate())

let cn = new SBI()
console.log(cn.getInterestRate())

// Why Abstraction is Important

//      ✔ Hides internal logic
//      ✔ Forces child classes to implement methods
//      ✔ Reduces complexity

// 3️⃣ Inheritance in JavaScript
// Inheritance means one class inherits another class’s properties and methods.

// 3️⃣ Inheritance in JavaScript
// Inheritance means one class inherits another class’s properties and methods.

class Employee {
  work() {
    console.log("Employee is working");
  }
}

class Manager extends Employee {
  manage() {
    console.log("Manager is managing");
  }
}

const mgr = new Manager();
mgr.work();    // inherited
mgr.manage();  // own method

// Why Inheritance is Important
//      ✔ Code reuse
//      ✔ Less duplication
//      ✔ Easy maintenance

// 4️⃣ Polymorphism in JavaScript
// Polymorphism means same method name, different behavior.

// 🔹 Method Overriding (Runtime Polymorphism)
class Bank {
  getInterestRate() {
    return 5;
  }
}

class HDFC extends Bank {
  getInterestRate() {
    return 7;
  }
}

const bank1 = new Bank();
const bank2 = new HDFC();

console.log(bank1.getInterestRate()); // 5
console.log(bank2.getInterestRate()); // 7

// 🔹 Method Overloading (JS Style)

// JavaScript doesn’t support traditional overloading, but we simulate it:

class Calculator {
  add(a, b, c) {
    if (c !== undefined) {
      return a + b + c;
    }
    return a + b;
  }
}

// 🔁 OOPs Concepts Mapping (Java vs JS)
// Concept	Java	JavaScript
// Encapsulation	private	#privateField
// Abstraction	abstract class	Error-throwing methods
// Inheritance	extends	extends
// Polymorphism	override	override
// ⭐ One-Line Interview Answers (JS)

// Encapsulation: Using private fields and methods to hide data.

// Abstraction: Exposing methods without implementation details.

// Inheritance: Using extends to reuse class behavior.

// Polymorphism: Same method name behaving differently at runtime.