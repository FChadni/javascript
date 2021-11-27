
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

// Function inside Function
console.log("");
console.log("Function inside Function");
function printHello5(){
    function printGreeting(){
        return "My name is Janny";
    }
    function sumTwoNum(num1, num2){
        return num1 + num2;
    }
    console.log("printGreeting: ",printGreeting());
    console.log("sumTwoNum: ",sumTwoNum(5,5));
}
printHello5();

// lexical scope ~ scope in the big function outside the small function
console.log("");
console.log("lexical scope");
const str = "Hello";
function printHello6(){
    // const str = "Hello";
    function printGreeting(){
        // const str = "Janny";
       console.log("My name is ", str);
    }
    console.log(str);
    printGreeting();
}
printHello6();

// block scope and function scope
console.log("");
console.log("block scope and function scope");
{
    let blockScope = "block scope"; // let and const are block scope and cannot be accessed from outside.
    console.log("Inside block: ",blockScope);
    var blockScope2 = "function scope inside block 'var'";
}
console.log("Outside block ~ function scope: ",blockScope2);

// callback function
console.log("");
console.log("callback function");
function myFunc2(){
    console.log("Second function");
}
function myFunc(callBack){
    callBack();
}
myFunc(myFunc2);

// Function returning function
console.log("");
console.log("Function returning function");
function funcReturnFunc(){
    function funcReturnFunc2(){
        console.log("funcReturnFunc");
    }
    return funcReturnFunc2;
}
const res = funcReturnFunc();
res();
