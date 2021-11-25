//while loop
var arr = [];
var i = 10;
while (i < 5){
    arr.push(i);
    i++;
}
console.log("While loop: ",arr);
console.log("");


//do while loop
i = 10;
do {
    console.log("do while loop runs once: ",i);
    i++;
} while(i<=9);

do{
    arr.push(i);
    i++;
} while (i < 5)
console.log("do while loop: ",arr);



//for loop increment
var incrementArr = [];
for (var j =0; j< 5; j++){
    incrementArr.push(j)
}
console.log("for loop increment: ",incrementArr);

//for loop  decrement
var decrementArr = [];
for (var j =5; j> 0; j--){
    decrementArr.push(j)
}
console.log("for loop decrement: ",decrementArr);



//Iterate through an array using for loop
var total = 0;
for (var i =0; i<incrementArr.length; i++){
    console.log(incrementArr[i]); //prints the elements
    total += incrementArr[i];     //adds all the element of array
}
console.log("Iterate through an array using for loop: ",total);



//Iterate through an 3d array using for loop
threeDArr = [[1,2,3], [4,5,6],[7,8,9]];
var pro = 1;
for (var i=0; i <threeDArr.length; i++){
    console.log(threeDArr[i]);
    for(var j = 0; j<threeDArr[i].length; j++){
        console.log(threeDArr[i][j]);
        pro *= threeDArr[i][j];
    }
}
console.log("Iterate through an 3d array using for loop: ",pro)
console.log("");


//break keyword, stops the for loop and jumps outside the loop.
console.log("break keyword");
for (let i = 1; i<=10; i++){
    if(i===4){
        break;
    }
    console.log(i);
}
console.log("loop stopped");
console.log("");

//continue keyword, will restart from the beginning.
console.log("continue keyword");
for (let i = 1; i<=10; i++){
    if(i===4){
        console.log("jumps to start of loop");
        continue;
    }
    console.log(i);
}