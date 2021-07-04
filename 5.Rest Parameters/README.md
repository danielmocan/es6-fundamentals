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

