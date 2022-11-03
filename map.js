var arr = [1, 2, 4, 6, 70];
arr.map((el) => {
    console.log(el * 2);
});
//Set method 
var str = [1, 4, 6, 7, 9, 3, 2, 5, 7, 5, 4, 3, 2, 5, 22, 2, 2, 2, 4444, 4, 4, 4,];
let uniqueChar = [... new Set(str)];
console.log(uniqueChar);