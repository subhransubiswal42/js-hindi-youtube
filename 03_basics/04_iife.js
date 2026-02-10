// Immediately Invoked Function Expressions (IIFE)


(function chai() {
    //named IIFE
    console.log(`DB CONNECTED`);
}());  //here we must add () and ; 


//Unnamed IIFE
( () => {
    console.log(`DB CONNECTED TWO`);
}) ();


//Passing arguments to IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ("subhransu")