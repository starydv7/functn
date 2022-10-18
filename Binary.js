// var arr = [1, 3, 5, 7, 9,10];
// function binary(x) {
//     return x.toString(2);
// }
// const outputmap = arr.map(binary);
// console.log(outputmap);

// const arrFilter = [1, 3,4, 5, 6, 8];
// function isEven(x) {
//     // return x % 2 === 0;
//     // return x > 4;
//     return x%2!==0
// }
// var output = arrFilter.filter(isEven);
// console.log(output);

// //even output only
// //what if x >4

// const outputFilter = arrFilter.filter(function greaterThan4(x) {
//     return x < 5;
// });
// console.log("Functional",outputFilter);


// //reduce

// const arrReduce = [1, 4, 7, 4, 8];
// //sum or max number

// //non function way to reduce

// function findSum(arrReduce) {
//     let sum = 0;
//     for (var i = 0; i < arrReduce.length; i++){
//         sum += arrReduce[i];
//     }
//     return sum;
// }
// console.log("Reduce By function", findSum(arrReduce));

// //Another way to make sum and find maximum number
// //Reduce Function Direct show desired result
// const outputReduce = arrReduce.reduce(function (acc, current) {
//     acc = acc + current;
//     return acc;
// }, 0);
// console.log("Reduce", outputReduce);

// //max value by Reduce function
// function maxValue(arrReduce) {
//     let max = 0;
//     for (var i = 0; i < arrReduce.length; i++){
//         if (arrReduce[i] > max) {
//             max = arrReduce[i];
//         }
//     }
//     return max;
// }
// console.log("Maximum Value", maxValue(arrReduce))

// //pass bt value
// const x = 10;
// const y = "abc";
// const a = x;
// const b = y;

// console.log("Pass By Value", x, y, a, b);

// //Scope
// {
//     var aglobal = 10;
//     let b = 10;
//     const cblock = 30;
//     console.log(aglobal);
//     console.log(b);
//     console.log(cblock);
// }

// console.log(aglobal);
// // console.log(b);
// // console.log(cblock);

// // shadowing
// let cblock = 100;
// {
//     var aglobal = 10;
//     let z = 20;
//     const cblock = 30;
//     console.log("shdow")
//     console.log(aglobal);
//     console.log(z);
//     console.log(cblock);
// }
// console.log(cblock);

// //
// var y = 100;
// function shadowing() {
//     var y = 10;
//     console.log(this.y);
//     this.y = 20;
// }
// shadowing();
// console.log(y);

// var c = 100;
// function x() {
//     var c = 10;
//     console.log(this.c);
//     this.c = 20;
// }
// x();
// console.log(c);
// var arr1 = ["a", "b", "c", "D"];
// var arr2 = ["e", "f", "g", "t"];
// var arr3 = ["a", "b", "c", "D"];


// // function sum(arr1,arr2) {
// //     return arr1 + arr2;
// // }

// // console.log(sum(arr1, arr2));
// function subArray(arr1, arr2) {
//     var bag = [];
//     for (var i = 0; i < arr1.length; i++){
//         if (arr1[i] == arr3[i]) {
//             bag.push(arr3[i]+arr1[i]);
//         }
//         else {
//            continue;
//         }
//     }
//     return bag;
// }
// console.log(subArray(arr1, arr2));
//Closure exapmles

// function counter() {
//     var count = 0;
//     return function incrementCounter() {
//         count++;
//         console.log(count);
//     }
// }
// var counter1 = counter();
// counter1();
// counter1();
// {/* <button onclick={counter1}>Increase</button> */}

// function Counter() {
//     var count = 0;
//     const incrementCounter=()=>{
//         count++;
//         console.log(count);
//     }

//     const decrementCounter = () => {
//         count--;
//         console.log(count);
//     }
// }

// //var counter1 = new Counter();//
// counsole.log(Counter());
