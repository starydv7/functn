//rest operator
function addNumber(a, b, c, ...others) {
    console.log(others[1]);
    return a + b + c;
}
const res = addNumber(2, 5, 6, 8, 9);
console.log(res);
