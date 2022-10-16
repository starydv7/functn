var arr = [1, 3, 5, 7, 9,10];
function binary(x) {
    return x.toString(2);
}
const outputmap = arr.map(binary);
console.log(outputmap);

const arrFilter = [1, 3,4, 5, 6, 8];
function isEven(x) {
    // return x % 2 === 0;
    // return x > 4;
    return x%2!==0
}
var output = arrFilter.filter(isEven);
console.log(output);

//even output only
//what if x >4

const outputFilter = arrFilter.filter(function greaterThan4(x) {
    return x < 5;
});
console.log("Functional",outputFilter);


//reduce

const arrReduce = [1, 4, 7, 4, 8];
