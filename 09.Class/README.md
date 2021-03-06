# Class

Class's are mostly syntactic sugar over prototypal inheritence, but I they are a nice addition to JavaScript.

```javascript
class Employee {
    constructor(name, age, department) {
        this.name = name;
        this.age = age;
        this.department = department;
    }
    getName() {
        return this.name;
    }
}

const newEmployee = new Employee('Adrian', 25, 'IT Support');
console.log(newEmployee);
```

Let's break this down.

### Contructor

`constructor` is a special method that is used for creating and initializing the object with **classes**.

```javascript
 constructor(name, age, department) {
    this.name = name;
    this.age = age;
    this.department = department;
 }
```

#### getName
`getName` is a method on the object that returns the name of the employee.

```javascript
    getName() {
        return this.name;
    }
```

### Static Methods & Properties

```javascript
class Names {
    static name = "This is a static property";
    static doubleName = (name) => `${name} ${name}`
}
console.log('Names.name ', Names.name);
console.log('Names.doubleName', Names.doubleName('Vasile'));

```
### Extends
With extends you can create a new class that is a child of another class.

```javascript
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
```
### Exercises
1. Create a `MathOperations` class that implements the following static methods: `square`, `double`, `cube`. Use all of them on number 5.
2. Create a class `Person` that has the following properties: `firstName`, `lastName`,`age` and a method `fullName`.
From this class create other two subclasses: `Student` and `Teacher`.
`Stundent`gets extra properties `year`,`grades` (array) and a method `showGrades`;
`Teacher` gets extra properties `courses`,`department` and a method `showTeacherInfo` that prints all the details for the teacher;
