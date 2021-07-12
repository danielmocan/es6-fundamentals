const firstName = "Ion";
const lastName = "Popescu";

const fullName = `First Name: ${firstName} Last Name:${lastName}`;
console.log(fullName);

//No more
const fullNameOld = "First Name: "+ firstName +"Last Name:"+ lastName;


const hours = 160;
const rate = 15;

console.log(`Your earnings in June: ${hours * rate} euro`);

// ### Exercises

/* 
1. Create a function the returns the content for and email. 
You have the following template. 
This function `createSubscriptionEmail` receives the following parameters: firstName, product, expiringDate, productPrice.
Sometimes the firstName is not available, use some default value for it.
*/

const emailTemplate = `

Dear Vasile,

Your have subscription for Netflix, is expiring on 15 august 2021.

The cost for you subscription is $21.

Thank you for being our loyal customer.

`;