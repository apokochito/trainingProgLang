"use strict"; //Eliminates some JavaScript silent errors by changing them to throw errors.

let str = "       Hello World!        ".trim(); //Removes whitespace from both sides of a string.

let fruits = ["Banana", "Orange", "Apple", "Mango"];

let stringFruits = "";
fruits.forEach(print);
function print(value) {
    stringFruits = stringFruits + " " + value;
}

let fruitsMap = fruits.map(mapFunction);
function mapFunction(value) {
    return value + "2 ";
}

let fruitsFilter = fruits.filter(filterFuncion);
function filterFuncion(value){
    return "Apple" == value;
}

document.getElementById("base").innerHTML = str;
document.getElementById("changed").innerHTML = "Is this an Array? " + Array.isArray(fruits);
document.getElementById("age").innerHTML = "My fruits are " + stringFruits;
document.getElementById("weigh").innerHTML = "My fruits modificated are " + fruitsMap;
document.getElementById("height").innerHTML = "My fruits filtered is " + fruitsFilter;