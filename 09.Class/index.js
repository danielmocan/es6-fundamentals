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