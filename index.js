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
