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

const fullName = `${firstName} ${lastName}`;
console.log(fullName);

```
You can do more stuff inside template literals.

```javascript
const hours = 160;
const rate = 15;

console.log(`Your earnings in June: ${hours * rate} euro`);
```
### Exercises

1. Create an email template using template literals, that allows you pass some variables.

```javascript

const emailTemplate = `

Dear ${firstName},

Your have subscription for ${product}, is expering on ${expiringDate}.

The cost for you subscription is $${productPrice}.

Thank you for being our loyal customer.

`;

```
