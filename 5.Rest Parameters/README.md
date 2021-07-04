# Rest Parameters

Rest Params allows you to collect a part of the parameters sent to a function in a array.

```javascript
const printDetails = (name,...res) => {
   console.log('Name', name);
   res.forEach( (item) => console.log(item));
}
```

### Exercises
1. Create a function that accepts an unlimited amount of parameters and sums them.

