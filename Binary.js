var arr = [1, 3, 5, 7, 9,10];
function binary(x) {
    return x.toString(2);
}
const output = arr.map(binary);
console.log(output);