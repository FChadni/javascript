/** Set
 * similar to array stores data ~ not-ordered, no-duplicates
 * cannot be accessed via index
 * uses ~ when unique value needed
 */
console.log("Creating set")
const numbers = new Set([1,2,3,4,5,6,7]); // list inside set
numbers.add(8); // adding element to set
console.log(numbers);
console.log(numbers.has(5)); //checks if set has particular element

console.log(""); //looping over set
console.log("looping over set");
for (let num of numbers){
    console.log(num);
}

console.log(""); // convert array to set
console.log("converting array to set");
const arr = [1,2,2,3,3,4,5];
const set = new Set(arr);
console.log("Array:",arr,",","Set:",set);

let length = 0; // length of set
for (let num of set){
    length++;
}
console.log("Length of set:",length);