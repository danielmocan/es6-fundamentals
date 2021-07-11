# Default Parameters

Default params are usefull, because no more undefined or extra code and checks.
They are simple to use, but before we see it in action lets see what we had before.

```javascript
function addVAT(price, vat = 0.19) {
    return price + (price * vat);
}

const productPrice = 100;
const specialVAT = 0.10;
const productPriceWithVAT = addVAT(productPrice);
const productPriceWithSpecialVAT = addVAT(productPrice, specialVAT);

console.log('productPriceWithVAT', productPriceWithVAT); //119
console.log('productPriceWithSpecialVAT', productPriceWithSpecialVAT); //110
```
### Exercises

1. Rewrite the addVAT to use arrow function
2. Create a function that returns an a text for an email, with multiple default params (name for example);
