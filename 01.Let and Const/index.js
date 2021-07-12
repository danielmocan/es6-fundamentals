let name = "Vasile";
 
 // not allowed because you are not able to redeclare it 
let name = "Ion";
 
 // not allowed because its used before its declared
 console.log(employeeName);
let employeeName = "Dani Mocanu";
 
{
    let employee = 'Calin';
}
 
 // this will throw an error (Uncaught ReferenceError: employee is not defined )
 console.log(employee); 

/* Const */
 const name = "Vasile";
 
 // not allowed because you are not able to redeclare it 
 const name = "Ion";
 
 // not allowed because its used before its declared
 console.log(employeeName);
 const employeeName = "Dani Mocanu";
 
 {
     const employee = 'Calin';
 }
 
 // this will throw an error (Uncaught ReferenceError: employee is not defined )
 console.log(employee);

// Const Extra Restrictions
const noValueChange = "Value";
noValueChange = "Changed Value"; //Uncaught TypeError: Assignment to constant variable.

const person = {
    name: 'Razvan',
    age: 25
};

// Works fine, but why?
person.position = 'AQA';
console.log(person);

/* Exercises */
//1. You have to following code, please move the parts of the code I a way that it will print I Got It.

let str1 = "I";
{
  let str2;
  console.log(str2);
  {
    if (true) {
      console.log(str3);
      str2 = "Got";
      let str3 = "It.";
    }
  }
  console.log(str1);
}
