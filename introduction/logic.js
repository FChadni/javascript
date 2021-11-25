/** comparison operators
 *  == equal
 *  === strict equal no conversion
 *  != not equal
 *  !== strict not equal no conversion
 *  > greater than
 *  < less than
 *  >= greater than or equal to
 *  <= less than or equal to
 *  && and ~ to check more then one condition
 *  || or ~ to check more then one condition
 */
//nested if statement
function example2 (num){
    if (num > 5){
        return "Tiny";
    }
    else if (num < 10){
        return "Small";
    }
    else if(num < 15){
        return "Medium";
    }
    else if(num < 20){
        return "Large";
    } else{
        return "Huge";
    }
}
console.log("Nested if/else statement: ",example2(7));
console.log("");





//Switch statement, Default: if non of the condition matches
function switchStatement(val){
    var ans = "";
    switch (val){
        case 1:
            ans = "alpha";
            break;
        case 2:
            ans = "beta";
            break;
        case 3:
            ans = "gamma";
            break;
        case 4:
            ans = "delta";
            break;
        default:
            ans = "stuff";
            break;
    }
    return ans;
}
console.log("Switch Statement: ",switchStatement(1));
//Switch statement Omitted, Default: if non of the condition matches
function switchStatementOmit(val){
    var ans = "";
    switch (val){
        case 1:
        case 2:
        case 3:
        case 4:
            ans = "alpha";
            break;
        case 5:
        case 6:
        case 7:
        case 8:
            ans = "beta";
            break;
        default:
            ans = "stuff";
            break;
    }
    return ans;
}
console.log("Switch Statement Omitted: ",switchStatementOmit(7));
console.log("");





//Ternary Operator
function checkEqual(a,b){
    return a === b ? true : false;
}
console.log("Ternary Operator: ", checkEqual(2,4));
function checkSign(num){
    //if num > 0 then "positive", if num < 0 then "negative", else "zero"
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log("Ternary Operator: ", checkSign(3));
console.log("");