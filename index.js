var arrToConvert = [[0,0,1],[2,3,3],[4,4,5]];
var arrToConvert = [[0,0,1],[2,3,3],[4,4,5]];
var newArr = [];


for(var i = 0; i < arrToConvert.length; i++)
{
    newArr = newArr.concat(arrToConvert[i]);
}

console.log(newArr);