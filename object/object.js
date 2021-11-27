/** Reference Data Type
 * Objects ~ stores key value pairs
 * no index, helpful and sufficient
 * key is by default string
 */

console.log("Creating and Printing object"); // creating and printing object
const fruits = { apple:5, mango:6, strawberry:7};
console.log(fruits, typeof fruits);

console.log(""); //array inside object
console.log("Array inside object");
const cartoon = {
    name : "Strawberry",
    age : 10,
    friends : ["Raspberry", "Blueberry", "Lemon"],
    "character hobbies" : ["baking", "singing", "helping friends"]
}
console.log(cartoon);

console.log(""); //accessing data using dot
console.log("Accessing data using dot");
console.log("first items of the array inside object: ",cartoon.friends[0]);

console.log(""); //accessing data using square bracket
console.log("Accessing data using square bracket");
console.log("first items of the array inside object: ",cartoon["name"]);

console.log(""); // difference between dot and square bracket
console.log(" ~ difference between dot and square bracket ~ ");
console.log(cartoon["character hobbies"]); // cannot be done with dot
const key = "email";
cartoon[key] = "email@msu.edu"; // cannot be done with dot

console.log(""); //Adding key value pair
console.log("Adding key value pair");
cartoon.cartoonShow = "Strawberry Shortcake"; //using dot
cartoon["where"] = "YouTube"; // using square bracket
console.log(cartoon);

