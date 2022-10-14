// ///Hoisting
// function fruits() {
//     name = "Yadav";
//     //we cant do with let hositing doesnot allow us to do this with let
//     console.log(name);
//     //console.log(price);
//     var name;
//     let price=92299229
// }
// fruits();/

//setTimeOut
// for (var i = 0; i < 3; i++){
//     setTimeout(() => console.log(i), 1);
// }
//because var is global scope and setTimeout takes some to show then 3 times loops run
//when we do same things with LET it will print counting because LET is blocked scope only

// for (let i = 0; i < 3; i++){
//     setTimeout(() => console.log(i), 1);
// }


//reference variable

// let c = { name: "Pawan" };
// let d;
// d = c;
// c.name = "Yadav";
// console.log(d.name);

//=== and ==
// let a = 3;
// let b = new Number(3);
// let c = 2;
// let d = "2";
// console.log(a == b);
// console.log(a === b);
// console.log(c == d);
// console.log(
//     c === d
// );

// const Person=({
//     name: "Pawan",
//     age: "24",
//     printInfo: function () {
//         console.log(`My name is ${this.name} and my age is ${this.age}`);
//         }
            
// })
// Person.printInfo();

const Info = () => {
    var age;
    if (age > 18) {
        return "Okay"
    }
    else {
        return "Not Okay";
    }
}
console.log(Info(25));