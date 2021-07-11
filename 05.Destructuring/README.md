# Destructuring

Destructuring allows you assign elements from an array.

```javascript
 const names = ['Daniel', 'Adina', 'Andrei'];
 
 const [ daniel, adina, andrei] = names;
```

You can also use rest parameters to collect a part of the elements from the array.

```javascript
const names = ['Daniel', 'Adina', 'Andrei'];

const [daniel, ...rest] = names;

console.log(rest);
```

You can also skip some elements.
```javascript
const names = ['Daniel', 'Adina', 'Andrei'];
const [first, , third]= names;
console.log(first);// Daniel
console.log(third);// Andrei
```
We can also use destructuring for objects.

```javascript
const person = {
  name: 'Rodica',
  age: 25
}

const { name } = person;
console.log(name); //Rodica

const { name: renamedName } = person;
console.log(renamedName); // Rodica

```

### Exercises
