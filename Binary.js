var arr = [1, 3, 5, 7, 9,10];
function binary(x) {
    return x.toString(2);
}
const outputmap = arr.map(binary);
console.log(outputmap);

const arrFilter = [1, 3, 5, 6, 8];
function isEven(x) {
    return x % 2 === 0;
}
var output = arrFilter.filter(isEven);
console.log(output);

//even output only
//what if x >4
