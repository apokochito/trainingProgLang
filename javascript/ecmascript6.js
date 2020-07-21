//Classes and constructors
class Person {
    constructor(name) {
        this.nickname = name;
    }

    get getName() {
        return this.nickname;
    }

    set setName(clientName) {
        this.nickname = clientName;
    }
}

//Arrow functions and defaults
const age = (x, y) => x * y;
const weigh = (x, y) => { return x * y };
function height(x, y = 100) { return x + y };

//New object
man = new Person("Tomas");

//Arrays
let numbers = [1, 2, 3, 4, 5];
let first = numbers.find(numbersFunction);
let second = numbers.findIndex(numbersFunction);

function numbersFunction(value) {
    return value > 2;
}

//Numbers
let x = Number.EPSILON;
let y = Number.MIN_SAFE_INTEGER;
let z = Number.MAX_SAFE_INTEGER;
Number.isInteger(x);
Number.isSafeInteger(y);
isFinite(10 / 0);       // returns false
isFinite(10 / 1);       // returns true
isNaN("Hello");       // returns true

//Render
document.getElementById("base").innerHTML = "My name is " + man.getName;
man.setName = "Tomi";
document.getElementById("changed").innerHTML = "But you can tell me " + man.getName;
document.getElementById("age").innerHTML = "My current age is " + age(12, 4);
document.getElementById("weigh").innerHTML = "My weigh is " + weigh(17, 4);
document.getElementById("height").innerHTML = "My height is " + height(67);
document.getElementById("numbers").innerHTML = "The number major than 2 is " + first + " and its index is " + second;
