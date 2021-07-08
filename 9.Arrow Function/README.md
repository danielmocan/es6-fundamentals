# Arrow Function
If the the arrow function recives only one argument you don't have to use the parentheses.
Also if the arrow function is not complex you can write it on one line.

```javascript
const sayHi = (name) => {
  console.log(`Hi ${name}`);
}
sayHi("Daniel");

const sayHello = name => console.log(`Hello, ${name}`);
sayHello("Andrei");
```

### Exercise

1. Rewrite the following function to use arrow function notation

```javascript
function sumOfThree(a){
  return function (b) {
    return function (c) {
      return a+b+c;
    }
  }
}
```
2. Rewrite the following example using arrow functions

```javascript
function getFullName(person) {
   return person.firstName +" "+ person.lastName;
}
const employees = [
    {
        firstName: 'Andrei',
        lastName: 'Enea',
        department: 'HR'
    },
    {
        firstName: 'Irina',
        lastName: 'Sirbu',
        department: 'Operations'
    },
    {
        firstName: 'Vitalie',
        lastName: 'Severin',
        department: 'IT Support'
    }
];

const allEmployeesFullNames = employees.map(getFullName);

console.log('All Employees', allEmployeesFullNames);
```
3. Rewrite the following functions using arrow

```javascript
const employees = [
    {
        firstName: 'Andrei',
        lastName: 'Enea',
        department: 'HR'
    },
    {
        firstName: 'Irina',
        lastName: 'Sirbu',
        department: 'Operations'
    },
    {
        firstName: 'Vitalie',
        lastName: 'Severin',
        department: 'IT Support'
    }
];
```
