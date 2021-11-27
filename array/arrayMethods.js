
let numbers = [1,2,3,4,5];
function multiplyArrayItem (number, index){
    console.log(`number is ${number} , index is ${index} = ${number*2}`);

}
for (let i = 0; i<numbers.length; i++){
    multiplyArrayItem(numbers[i], i);
}

console.log("");
console.log("For each method");
function multiplyArrayItem2 (number, index){
    console.log(`number is ${number} , index is ${index}, ${number*2}`);
}
numbers.forEach(multiplyArrayItem2);
console.log("For each method simpler");
numbers.forEach(function (number, index){
    console.log(`number is ${number} , index is ${index}, ${number*2}`);
});

console.log("");
console.log("map method");





