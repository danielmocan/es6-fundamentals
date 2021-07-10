# Class

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
console.log(newEmployee)
```
