"use strict"
// var username = "oli";

// console.log(username)

// 1) Names only contains, letters, numbers, symnbols $ _
// 2) first character must not be number

// var firstname-; //invalid way to declare a variable
// var 1lastName; //invalid way to declare a variable

// Fix the variable names below, and log them out to the console!

// var firstName = "oli";

// var surName = "ullah";

// var oneThousand = "one thousand";

// console.log(firstname);
// console.log(surname);
// console.log(oneThousand);

// message = "hello world";

// var message = "hello again";

// console.log(message);

//hoisting

// console.log(age);

// var age = 26;
// javascript runs in two modes 
// 1) Sloppy mode -default in scripts 
// 2) strict mode - throws more errors, prevents pitfalls of the language


// Challenge 1: We want to log out the name "oli", but it doesn't work. Can you fix it?
// const name = "Oli";
// console.log(name);

// // Challenge 2: We want 102 to be logged out. But we're getting an error instead. Try to fix it!
// let count = 100;
// count = 101;
// count = 102;
// console.log(count);

// //  Challenge 3: We want to log out the price (50), but it doesn't work. Can you fix it?
// let price = 50;
// console.log(price);


// const - restrictions that make code more readable
// 1) must be initialized with value
//2) can't be reassigned after declarations

// const originalPrice = 50;
// const percentOff = 20;
// const salePrice = originalPrice * (percentOff / 100);

// rest of our program (maybe 100s of lines)

// console.log(salePrice);


// var price = 20;
// var isSale = true;

// if(isSale){
//     //discount price of product
//     const price = 20-2;
//     //do something
//     console.log("Sale price", price);
// }

// console.log("Price", price);

//template literal

// const weight = 150;
// const moonWeight = `You weigh ${weight * 0.165} on the moon`;

// console.log(moonWeight);

//if statement -- evaluates the boolean values

// const prefersDarkMode = true;
// const prefersSolarisedMode = true;


// if(prefersDarkMode){
//     console.log("Set dark mode")
// }else if(prefersSolarisedMode){
//    console.log("solarised mode set")
// }
// else{
//     console.log("set light mode!")
// }


/*
Primitive types:

string
number
boolean
undefined
null
symbol

everything else - Object type
*/

// let message = 'some string';

// console.log(typeof window);

// 1) Explicit type conversion
// 2) Implicit type conversion 

// console.log(typeof String(42));

//truthy
//falsy    [false, 0, '', null, undefined, NaN]

// if("hello"){
//     console.log("run");
// }else{
//     console.log("skipped");
// }

//Avoid direct comparisons in javascript

// let username = null;

// if(!username){
//     console.log("No User");
// }

//use === or strict equals

// const user = null;
// let username = undefined;

// if(null===username){
//     console.log("Equals");
// }else{
//     console.log("Not equals");
// }

//shorten conditions and ternary

// const isAuthenticated = false;


// const cartItemCount = isAuthenticated ? 1 : "Please log in";

// console.log(cartItemCount)

// ternary chaining

// const age = 12;

// const greetings = age < 12 ? "Hey Kiddo" : age < 18 ? "Hey Teenager" : age > 20 ? "hey adult" : "Hey man"

// console.log(greetings);

// conditionals short circuiting

// const name = "oli"
// const isEmailVerified = true;

// const username = -isEmailVerified && name  || "Invalid user";

// console.log(username);

/* Challenge 1: Let's say you're building Reddit. Only users that are either moderators or have reached a certain karma threshold are allowed to upvote. */

// const karma = 143;
// const isModerator = true;

// // first use a ternary to set hasEnoughKarma to true if karma is above 100. If not, set it to false
// let hasEnoughKarma = karma > 100 ? true : false;

// //  set the value of canUpvote with short-circuiting (using hasEnoughKarma and isModerator)
// let canUpvote = isModerator || hasEnoughKarma;

// console.log("canUpvote:", canUpvote);


// /* Challenge 2: Let's say that only moderators who have enough karma are allowed to delete posts.  How would you set the canDelete variable */

// // set canDelete to true if both hasEnoughKarma and isModerator is true
// let canDelete = isModerator && hasEnoughKarma ;

// console.log("canDelete:", canDelete);


// // Challenge 3: what is the value of user? What if you switch the hasValidEmail variable to false? What if the response is empty?

// const response = "";
// const hasValidEmail = false;
// const user = hasValidEmail && (response || "guest");
//  console.log("user: ", user);