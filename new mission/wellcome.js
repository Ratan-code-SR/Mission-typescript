"use strict";
// basic data type of type script
// number
let roll = 23;
// string
let firstName = "Ratan";
// boolean data type
let isAdmin = true;
//  array data type 
let list = [1, 3, 4, 5];
// tuple data type
let collection = ["ratan", 3];
// enum Data types 
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Blue;
// any types
console.log({ roll, firstName, isAdmin });
// Reference type object
const user = {
    company: "cht voice",
    firstName: "Donald",
    lastName: "Trump",
    isMarried: true
};
console.log(user.company);
// 
// we are learning now array function
// Learning function
// Array function
// Normal function
function add(a, b) {
    return a + b;
}
const result = add(3, 4);
console.log(result);
