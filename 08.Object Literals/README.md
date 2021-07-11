# Object Enhancements

Es6 standard brought some nice enchancements for objects

#### Initialization from variables

```javascript
const name = 'Oana';
const age = 25;

// no more 
const person = {
  name: name,
  age: age,
}

// you can simply
const newPerson = {
  name,
  age
}
```
#### Shorthand definitions for object methods

```javascript
const employee = {
  firstName: 'Loredana',
  lastName: 'Lasca'
  age: 25,
  getFullName: function() {
    return this.firstName +' '+ this.lastName;
  }
};

const newEmployee = {
  firstName: 'Oana',
  lastName: 'Ujica'
  age: 25,
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

```
#### Dynamic property keys

```javascript
//Before
const objKey = 'name';

const person = {
  age: 25,
}
person[objKey] = 'Valentin';

//with es6 you can add them directly
const person = {
  age: 25,
  ['name']: 'Razvan',
}

```

