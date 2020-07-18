//Classes and constructors
class Person {
    constructor(name){
        this.nickname = name;
    }

    get getName () {
        return this.nickname;
    }

    set setName (clientName) {
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

//Numbers

//Render
document.getElementById("base").innerHTML = "My name is " + man.getName;
man.setName="Tomi";
document.getElementById("changed").innerHTML = "But you can tell me " + man.getName;
document.getElementById("age").innerHTML = "My current age is " + age(12, 4);
document.getElementById("weigh").innerHTML = "My weigh is " + weigh(17, 4);
document.getElementById("height").innerHTML = "My height is " + height(67);