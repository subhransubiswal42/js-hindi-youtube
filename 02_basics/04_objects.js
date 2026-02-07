// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);



const regularUser = {
    email: "some@email.com",
    fullname: {
        userfullname: {
            firstname: "Subhransu",
            lastname: "Biswal"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2} // This is the way to merge two objects in JavaScript using spread operator
// const obj3 = Object.assign({}, obj1, obj2) // This is another way to merge two objects in JavaScript using Object.assign() method

const obj3 = {...obj1, ...obj2}
console.log(obj3); // This will print the merged object with all the key-value pairs of both the objects


// from the database value

const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },

    {
        id: 2,
        email: "ss@gmail.com"
    }
]

console.log(users[0].email)


console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // This will return true because the object has the property 'isLoggedIn'
console.log(tinderUser.hasOwnProperty('isLogged')); // This will return false because the object does not have the property 'isLogged' 



//----------------------------- de-structuring and JSON ------------------------------

const course = {
    coursename: "JavaScript",
    price: 999,
    courseInstructor: "Subhransu"
}

console.log(course.courseInstructor); //this is the normal way to access the property of an object

const {courseInstructor: instructor} = course // this is the de-structuring way to access the property of an object
console.log(instructor); // this will print the value of the property 'instructor' which is "Subhransu"