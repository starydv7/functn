//closure
function greet(name) {
    console.log("hi" + " " + name);
}
greet();

//set method
const letters = new set["a", "b", "c"];

//object map

const fruits = new map(["apples", 500]);


// ProtoType

function Person(age, name, eyeColor) {
    this.name = name;
    this.age = age;
}
Person.prototype.nationality = "Indian";
console.log(name, age, nationality);



//closure
function calculate(x) {
    function multiply(y) {
        return x + y;
    }
    return multiply;
}
const multiply3 = calculate(3);
const multiply4 = calculate(4);

console.log(multiply3);

console.log(multiply()) //NAN

console.log(multiply(6));


//spread operator

const arrValue = ["my", "name", "is", "is", "pawan"];

console.log(arrValue); //whole array like----
console.log(...arrValue);//my name is pawan;

//template
const name = "jack";
console.log(`Hello ${name}!`); //Hello Jack

//setInterval

function greet() {
    console.log("hello world")
}

setInterval(greet, 1000);


//Array Destructring

let array = ["Pawan", "yadav"];

let [firstName, surName] = array;

alert(firstName);
alert(surName);

//Generator

function* generator() {
    console.log("This will be connected");
    yield "hello";  //line
    console.log(" I will be printed after pause");
    yield World;
}

// js Hoisting

var x = 5;
a = 1;
alert(!a == +a);
var a;
function dosometing() {
    x = 33;
    console.log(x);
    var x;
}

//pass by Value;

var y = 234;
var z = y;
var y = 343;
var z = y;
var z = 543;
console.log(z);

//Higher Order Function

function higherOrder(fn) {
    fn();
}
higherOrder(function () {
    console.log("Hello World");
});

function higherOrder() {
    return function () {
        return "Do something";
    }
}
var x = higherOrder();
x();
