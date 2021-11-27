
// creating function
console.log("Creating function");
function printHello(){
    return "hello";
}
console.log("function printHello(){: ",printHello());

// creating function
console.log("");
console.log("function expression");
const printHello2 = function(){
    return "hello";
}
console.log("const printHello2 = function(){: ",printHello2());

// Arrow Functions
console.log("");
console.log("Arrow Functions");
const printHello3 = () => "hello";
console.log("const printHello2 = () => {: ",printHello3());

// Hoisting Functions
console.log("");
console.log("Hoisting Functions");
console.log("const printHello2 = () => {: ",printHello4());
function printHello4(){
    return "hello";
}

// Creating function with parameter
console.log("");
console.log("Creating function with parameter")
function sum(num1, num2){
    return num1 + num2;
}
let result = sum(5,6); //argument
console.log(result);

//05:29:22 Functions inside functions
