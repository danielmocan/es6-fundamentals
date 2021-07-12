const sayHi = (name) => {
    console.log(`Hi ${name}`);
}
sayHi("Daniel");

const sayHello = name => console.log(`Hello, ${name}`);
sayHello("Andrei");


//Exercise
//1. Rewrite the following function to use arrow function notation
function sumOfThree(a){
    return function (b) {
        return function (c) {
        return a+b+c;
        }
    }
}

// 2. Rewrite the following functions using arrow
const employees = [
    {
        firstName: 'Andrei',
        lastName: 'Enea',
        department: 'HR'
    },
    {
        firstName: 'Irina',
        lastName: 'Sirbu',
        department: 'Operations'
    },
    {
        firstName: 'Vitalie',
        lastName: 'Severin',
        department: 'IT Support'
    }
];

const hr = employees
            .filter( function(employee) {
                if( employee.department ==='HR') {
                    return true;
                }
                return false;
            })
            .map( function(employee) {
                return {
                    ...employee,
                    salary: 7000
                }
            });

console.log(hr);