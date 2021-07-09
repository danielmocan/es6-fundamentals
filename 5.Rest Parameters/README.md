# Rest Parameters

Rest Params allows you to collect a part of the parameters sent to a function in a array.

```javascript
const printDetails = (name,...res) => {
   console.log('Name', name);
   res.forEach( (item) => console.log(item));
}
```
This collection cand only be done for all of the params, or the ones on the right. 
```javascript
const restExample = (...rest, a, b) => console.log(rest);
const anotherBadExample = (a, ...rest, b) => console.log(rest);

```

### Exercises
1. Create a function that accepts an unlimited amount of parameters and sums them.
2. Create a recursive function that sums the elements passed into the function

How to do it
```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = (a, ...rest) => {
    if(rest.length === 0) {
        return a;
    }
    return sum(...rest) + a;
}

console.log(sum(...numbers));
```


