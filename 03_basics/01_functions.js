function sayMyName() {
    console.log("S");
    console.log("U");
    console.log("B");
    console.log("H");
    console.log("R");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("U");
    
}

sayMyName() // **this is how we call a function, it will execute the code inside the function and print the name in the console.**


function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}

addTwoNumbers(3, "5") // **this will print "35" in the console because the + operator is used for both addition and string concatenation. Since one of the operands is a string, it will concatenate the two values instead of adding them.**

// const result = addTwoNumbers(3, 5) // **this will print "8" in the console because both operands are numbers, so it will perform addition.**

//console.log("result: ", result);// **this will print "result: undefined" in the console because the addTwoNumbers function does not return any value, it only prints the result in the console. Therefore, when we try to assign the result of the function to a variable, it will be undefined.**

//Right way to write the function
function addTwoNumbers(num1, num2) {
    let result = num1 + num2;
    // console.log("sinu");// **this line will be executed before the return statement, so it will print "sinu" in the console.**
    return result;
    // console.log("sinu");// **this line will never be executed because the return statement will exit the function immediately, so any code after the return statement will not be executed.**
    //return num1 + num2; // **this is the another way to return the funtion result**
}
const result = addTwoNumbers(3, 5)
console.log("Result: ", result);



//Another example of function
function loginUserMessage(username) {
    if(username === undefined){  //We can also use if(!username) to check if the username is falsy (undefined)
        console.log("Please enter a username");
        return  // **this return statement will exit the function immediately, so any code after this line will not be executed.
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Subhransu"));
// console.log(loginUserMessage()); // **this will print "undefined just logged in" in the console because we are not passing any argument to the function, so the username parameter will be undefined.** */ Without if else condition */

console.log(loginUserMessage()); // now this will print "Please enter a username" affter adding if else condition




function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))





//Some more examples of function with objects and arrays
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

//Another way to write the function without creating a new object variable, we can directly pass the object as an argument to the function.
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]  // predefining an array by the user

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000])); //Another way to write the function without creating a new array variable, we can directly pass the array as an argument to the function. 