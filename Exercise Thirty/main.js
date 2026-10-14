function operate(a,b, callback){
    return callback(a,b);
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}
console.log("Multiplication: ", operate(10,5, multiply));
console.log("Division: ", operate(64,8, divide));