
let numbers = [1,4,3,10,5];
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
function square (number){
    return number * number;
}
console.log("Returns computed array: ",numbers.map(square));

console.log("");
console.log("filter method"); // returns true or false
console.log(numbers.filter((number)=>{
    return number % 2 === 0;
}));

console.log("");
console.log("reduce method"); // accumulator ~ returned value,currentValue ~ next value in array,
console.log(numbers.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
},0));

console.log("");
console.log("sort method");
// a - b ---> positive (b,a)
// a - b ---> negative (a,b)
console.log(numbers.sort((a,b)=>{
    return a-b;
}));

console.log("");
console.log("find method");
console.log(numbers.find((num)=>{
    return num === 10;
}));

console.log("");
console.log("every method"); // checks if every items meets the condition
console.log(numbers.every((num)=>{
    return num %2===0;
}));

console.log("");
console.log("some method"); // checks if one or more items meets the condition
console.log(numbers.some((num)=>{
    return num %2===0;
}));

console.log("");
console.log("fill method"); // fills the array with placeholder
const  fillArray = new Array(10).fill(-1);
fillArray.fill(0,2,5); // replacing items from existing array
console.log(fillArray);

console.log("");
console.log("splice method"); // to delete or insert splice(start index, delete count, insert item)
console.log(fillArray.splice(1,1)); // delete
fillArray.splice(1,0,3); // insert
console.log(fillArray);
fillArray.splice(3,1, 5,5); // delete and insert
console.log(fillArray);


