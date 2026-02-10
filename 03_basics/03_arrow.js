const user = {
    username: "subhransu",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);  //'this' keyword refers to the current context(value) of the object
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // it refers to the empty object in node js and in browser it refers to the window object



// function chai() {
//     let username = "subhransu";  // it's not a property of the object, it's a variable declared inside the function
//     console.log(this.username);
    
// }
// chai()


// const chai = function(){  //Also this function give the same output as the above one 
//     let username = "subhransu";
//     console.log(this.username);
// }
// chai() 

// ++++++++++++++++++++++++ Arrow Function ++++++++++++++++++++++++
const chai = () => {  
    let username = "subhransu"; 
    console.log(this);
}
// chai()  // It will give empty object {}

// () => {} 'syntax of Arrow Function'

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(9, 5));


// *simplicity returning the value without using 'return' keyword and curly braces*
// const addThree = (num1, num2) => num1 + num2
// const addThree = (num1, num2) => (num1 + num2)  //we can also use parentheses to return the value
// console.log(addThree(9, 5));


// const addFour = (num1, num2) => {username: "subhransu"} //it will return undifined because we are not returning anything from the function, we are just creating an object inside the function but not returning it
const addFour = (num1, num2) => ({username: "subhransu"})  // If we want to return object then we will nedd add parentheses
console.log(addFour(1, 2));

