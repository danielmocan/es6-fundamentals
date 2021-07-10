# Destructuring

Destructuring allows you assign elements from an array.

```javascript
 const names = ['Daniel', 'Adina', 'Andrei'];
 
 const [ daniel, adina, andrei] = names;
```

You can also use rest parameters to collect a part of the elements from the array.

```javascript
const names = ['Daniel', 'Adina', 'Andrei'];

const[daniel,...rest] = names;

console.log(rest);
```

### Exercises
