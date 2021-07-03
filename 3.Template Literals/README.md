# Template Literals

ES6 template litterals allow you to work esier with strings.

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
