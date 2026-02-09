//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);




function one(){
    const username = "subhransu"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  //It gives error because website is not defined in this scope. It is only defined in two() function scope.

     two()

}

// one()


//Another example of scope
if (true) {
    const username = "subhransu"
    if (username === "subhransu") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}


/* Hoisting*/

// addTwo(5)  // It gives error because addTwo is not defined in this scope. It is only defined in the scope of the function expression. Function expressions are not hoisted, so they cannot be called before they are defined.
// const addTwo = function(num){
//     return num + 2
// }