# Template Literals

ES6 template litterals allow you to work easier with strings.

```javascript
const fullName = `Ion Popescu`;
```
For this we could have used single or double quotes.

The real values is here:
```javascript
const firstName = "Ion";
const lastName = "Popescu";

const fullName = `First Name: ${firstName} Last Name:${lastName}`;
console.log(fullName);

//No more
const fullName = "First Name: "+ firstName +"Last Name:"+ lastName;
```
You can do more stuff inside template literals.

```javascript
const hours = 160;
const rate = 15;

console.log(`Your earnings in June: ${hours * rate} euro`);
```
### Exercises

1. Create a function the returns the content for and email. 
You have the following template. 
This function `createSubscriptionEmail` receives the following parameters: firstName, product, expiringDate, productPrice.
Sometimes the firstName is not available, use some default value for it.
```javascript

const emailTemplate = `

Dear ${firstName},

Your have subscription for ${product}, is expering on ${expiringDate}.

The cost for you subscription is $${productPrice}.

Thank you for being our loyal customer.

`;
```
