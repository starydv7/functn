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