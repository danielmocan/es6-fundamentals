class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, department, salary) {
        super(firstName, lastName, age)
        this.department = department;
        this.salary = salary;
    }
}

const employee = new Employee('Daniel', 'Mocan', '25', 'Operations', 1000);
console.log(employee);

/* Exercises */
//1. Create a `MathOperations` class that implements the following static methods: `square`, `double`, `cube`. Use all of them on number 5.

/* 2. Create a class `Person` that has the following properties: `firstName`, `lastName`,`age` and a method `fullName`.
From this class create other two subclasses: `Student` and `Teacher`.
`Stundent`gets extra properties `year`,`grades` (array) and a method `showGrades`;
`Teacher` gets extra properties `courses`,`department` and a method `showTeacherInfo` that prints all the details for the teacher;
*/
