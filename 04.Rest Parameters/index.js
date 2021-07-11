const printDetails = (name,...res) => {
    console.log('Name', name);
    console.log('rest', rest);
 }
 
 const restFunc = (a,b, ...rest) => console.log(rest);
 
 restFunc(1,2, 3, 4) // [3,4];
 restFunc(1)// [] (empty array)

// Bad examples
const restExample = (...rest, a, b) => console.log(rest);
const anotherBadExample = (a, ...rest, b) => console.log(rest);



//Exercises
// 1. Create a function that accepts an unlimited amount of parameters and sums them.
// 2. Create a recursive function that sums the elements passed into it using rest.
