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

#### Contructor

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

