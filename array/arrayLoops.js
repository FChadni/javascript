
let fruits = ["apple", "mango", "strawberry"];
console.log(""); // While loop in array
let newArr = [];
let i = 0;
console.log("White loop in array");
while (i < fruits.length){
    newArr.push(fruits[i]);
    console.log(newArr[i]);
    i++;
}

console.log(""); // For loop in array
newArr = [];
console.log("For loop in array");
for (let i=0; i < fruits.length; i++){
    newArr.push(fruits[i]);
    console.log(newArr[i]);
}

console.log(""); // For of loop in array
newArr = [];
console.log("For of loop in array");
for (let fruit of fruits){
    newArr.push(fruit);
    console.log(newArr);
}

console.log(""); // For in loop in array
newArr = [];
console.log("For in loop in array");
for (let index in fruits){
    newArr.push(fruits[index]);
    console.log(newArr[index]);
}

//Array destructuring
console.log("");
console.log("Array Destructuring")
let fruit1 = fruits[0];
let fruit2 = fruits[1];
console.log("first index: ", fruit1);
console.log("second index: ", fruit2);
[fruit1, fruit2] = fruits
console.log("first index: ", fruit1);
console.log("second index: ", fruit2);
