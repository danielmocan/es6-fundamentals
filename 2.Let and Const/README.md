# Let and Const


## Let
Variables defined with **let**:

 * cannot be redeclared
 * have block scope
 * must be declared before used
    
 ```javascript
 let name = "Vasile";
 
 // not allowed because you are not able to redeclare it 
 let name = "Ion";
 
 // not allowed because its used before its declared
 console.log(company);
 
 {
     let employee = 'Calin';
 }
 
 // this will throw an error (Uncaught ReferenceError: employee is not defined )
 console.log(employee); 

 ```
 
 ## Const
 
 Declaring a variable with conts has the same restricitions as let, but with one important addition. The value cannot be changed after it was assigned(*).

    
 ```javascript
 const name = "Vasile";
 
 // not allowed because you are not able to redeclare it 
 const name = "Ion";
 
 // not allowed because its used before its declared
 console.log(company);
 
 {
     const employee = 'Calin';
 }
 
 // this will throw an error (Uncaught ReferenceError: employee is not defined )
 console.log(employee);
 
 const noValueChange = "Value";
 noValueChange = "Changed Value"; //Uncaught TypeError: Assignment to constant variable.
 ```
### Exercises
 
