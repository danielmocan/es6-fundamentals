# Default Parameters

Default params are usefull, because no more undefined or extra code and checks.
They are simple to use, but before we see it in action lets see what we had before.

```javascript
function addVAT(amount, vat = 0.19) {
  return amount * vat;
}
```


### Exercises

1. Create a function that returns an a text for an email, no with multiple default params;
