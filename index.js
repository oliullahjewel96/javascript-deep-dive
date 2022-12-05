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

if("hello"){
    console.log("run");
}else{
    console.log("skipped");
}