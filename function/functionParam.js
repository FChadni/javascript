// Creating function with parameter
console.log("");
console.log("Creating function with parameter")
function sum(num1, num2){
    return num1 + num2;
}
let result = sum(5,6); //argument
console.log(result);

// function with default parameter
console.log("");
console.log("function with default parameter")
function defaultParam(num1, num2 = 1){
    // if(typeof num2 === "undefined"){
    //     num2 = 1;
    // }
    return num1 + num2;
}
console.log(defaultParam(5));

// function with rest parameter
console.log("");
console.log("function with rest parameter")
function restParam(num1, ...num2){
    return `num1 is ${num1}, num2 is ${num2}`;
}
console.log("restParam: ",restParam(5,6,7,8,9));
function restParam2(...nums){
    let total = 0;
    for (let num of nums){
        total = total + num;
    }
    return total;
}
console.log("restParam2: ",restParam2(5,6,7,8,9));

// function parameter destructuring
console.log("");
console.log("function parameter destructuring");
const cartoon = {
    name : "Strawberry",
    gender : "female"
}
function destructuringParam(obj){
    console.log(obj.name);
    console.log(obj.gender);
}
destructuringParam(cartoon);

function destructuringParam2(name, gender){
    console.log(name);
    console.log(gender);
}
destructuringParam2(cartoon);
