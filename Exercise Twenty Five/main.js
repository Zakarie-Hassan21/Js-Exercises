// Spread Operator
const numbers = [1, 2, 3];
const allNumbers = [...numbers, 4, 5, 6];
console.log(allNumbers);

// Rest Operator
const multiply = (...sum) => {
    return sum.reduce((total, num) => total * num ,1);
}

console.log(multiply(10,20,30));
