const names = ['Daniel', 'Adina', 'Andrei'];
const [ daniel, adina, andrei] = names;


const names = ['Daniel', 'Adina', 'Andrei'];
const [daniel, ...rest] = names;
console.log(rest);


const names = ['Daniel', 'Adina', 'Andrei'];
const [first, , third]= names;
console.log(first);// Daniel
console.log(third);// Andrei

const person = {
    name: 'Rodica',
    age: 25
  }
  
  const { name } = person;
  console.log(name); //Rodica
  
  const { name: renamedName } = person;
  console.log(renamedName); // Rodica

/*
### Exercises
1. You have the following list of employees, create a function that prints the details for an employee.
Use destructuring where is possible.
Then apply this function to every employee of the list.
*/
const employees = [
  {
    name: 'Daniel',
    age: 25,
    details: {
      supervisor: 'Calin',
      department: 'HR',
    }
  },
  {
    name: 'Oana',
    age: 25,
    details: {
      supervisor: 'Marius',
      department: 'Operations',
    }
  },
  {
    name: 'Claudiu',
    age: 25,
    details: {
      supervisor: 'Calin',
      department: 'HR',
    }
  }
];