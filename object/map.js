/** Maps
 * similar to objects stores key value pair
 * ordered data, key can be any data type unlike object
 */

console.log("creating map");
const createMap = new Map([[1,"one"],[2,"two"]]);
createMap.set(3,"three");
createMap.set(4,"four");
console.log(createMap);

console.log("");
console.log("Accessing Map value with key:", createMap.get(1));
console.log("Printing all the Keys:" ,createMap.keys());
console.log("Printing all the Values:", createMap.values());

// Iterable ~ for of loop
console.log("");
console.log("Iterable ~ for of loop");
for (let key of createMap){
    console.log(key); // returns array
}

// Destructuring
console.log("");
console.log("Iterable ~ for of loop Destructuring");
for (let [key, value] of createMap){
    console.log(key,value); // returns array
}

// object in map
console.log("");
console.log("object in map as key");
const obj = {
    userId : 1,
    name : "Tomato"
    // age : {gen:"123"}
}
const map = new Map();
map.set(obj, {shape:"round", age:"IDK"});
console.log(map);
console.log("Accessing value of key:",map.get(obj).shape);

// clone map
console.log("");
console.log("clone map");

// optional chaining ~ to get undefined instead of error when item does not exist
console.log("");
console.log("optional chaining");
console.log(obj?.age?.gen);

