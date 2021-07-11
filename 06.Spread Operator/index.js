const listOfEmployees = ['Loredan', 'Valentin', 'Norbert'];
const newHires = ['Dorin', 'Dan', 'Claudiu'];

// creates a new list with the updated employees
const updateEmployeesList = [...listOfEmployees, ...newHires];

//es9

const person = {
    name: 'Vitalie',
    age: 25,
    department: 'HR',
  }
  const newPerson = {...person};
  console.log(newPerson);


//### Exercises

//1. You have the `hello` variable, try to spread it in am empty array ([]) and see what happens
const hello = 'hello';

// 2. Using the following 3 objects, use the spread operator in an empty {} to create an object with the properties and values:
// * color: blue
// * height: 10
// * brand: Fortech

const obj1 = {
  color: 'red',
  height: 10,
};

const obj2 = {
  height: 15,
  brand: 'Fortech'
};

const obj3 = {
  color: 'blue',
};