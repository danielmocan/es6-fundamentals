function addVAT(price, vat = 0.19) {
    return price + (price * vat);
}

const productPrice = 100;
const specialVAT = 0.10;
const productPriceWithVAT = addVAT(productPrice);
const productPriceWithSpecialVAT = addVAT(productPrice, specialVAT);

console.log('productPriceWithVAT', productPriceWithVAT);
console.log('productPriceWithSpecialVAT', productPriceWithSpecialVAT);


//Exercises
//1. Rewrite the addVAT to use arrow function
//2. Create a function that returns an a text for an email, with multiple default params (name for example);
  