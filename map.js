var arr = [1, 2, 4, 6, 70];
arr.map((el) => {
    console.log(el * 2);
});
//Set method 
var str = [1, 4, 6, 7, 9, 3, 2, 5, 7, 5, 4, 3, 2, 5, 22, 2, 2, 2, 4444, 4, 4, 4,];
let uniqueChar = [... new Set(str)];
console.log(uniqueChar);

//highest number of occurance
// var arr = [1, 2, 4, 1, 1, 5];
// var obj = {};
// for (var i in arr) {
//     if (arr[i] == arr[i + 1]) {
//         obj++;
//     }
//     console.log(arr[obj]);
// }
var array = [1, 2, 3, 4, 5, 1, 3, 4, 1];
function mode(array)
{
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
    return el;
}
var res = mode(array);
console.log(res);