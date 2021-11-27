const cartoon = {
    name : "Strawberry",
    age : 10,
    friends : ["Raspberry", "Blueberry", "Lemon"],
    "character hobbies" : ["baking", "singing", "helping friends"]
}

//for in loop
console.log("for in loop");
for(let key in cartoon){
    console.log(key, cartoon[key]);
    console.log(`${key} : ${cartoon[key]}`);
}

//Object.keys
console.log("");
console.log("Object.keys");
console.log(Object.keys(cartoon)); // returns array of keys
console.log("");
console.log("for loop with Object.keys");
for (let key of Object.keys(cartoon)){
    console.log(key,cartoon[key]);
}

// Computed properties
console.log("");
console.log("Computed properties");
const key1 = "1";
const key2 = "2";
const val1 = "11";
const val2 = "22";

const obj = {
    [key1] : val1,
    [key2] : val2
}
const obj2 = {
    key1 : "val1",
    key2 : "val2"
}
console.log(obj);

// Spread Operator
console.log("");
console.log("Spread Operator ~ spreads the items")
let newObj = {...obj,...obj2};
console.log(newObj);
newObj = {..."abc"};
console.log(newObj);

//object destructuring
console.log("");
console.log(" ~ object Destructuring ~ ");
let name1 = cartoon.name;
let age1 = cartoon.age;
console.log(name1, age1);
let {name:name2, age:age2} = cartoon
console.log(name2, age2);

//object inside array
console.log("");
console.log(" ~ object inside array ~ ");
const users = [
    {userID: 1, userName: "one", userNumber: "11"},
    {userID: 2, userName: "two", userNumber: "22"},
    {userID: 3, userName: "three", userNumber: "33"}
];
console.log(users);
for (let user of users){
    console.log(user);
}

//object nested destructuring
console.log("");
console.log(" ~ object nested Destructuring ~ ");
const [user1, user2, user3] = users;
console.log(user1, user2, user3);
const [{userID}, {userName}, {userNumber}] = users;
console.log(userID, userName, userNumber);