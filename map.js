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
// var array = [1, 2, 3, 4, 5, 1, 3, 4, 1];
// function mode(array)
// {
//     if(array.length == 0)
//         return null;
//     var modeMap = {};
//     var maxEl = array[0], maxCount = 1;
//     for(var i = 0; i < array.length; i++)
//     {
//         var el = array[i];
//         if(modeMap[el] == null)
//             modeMap[el] = 1;
//         else
//             modeMap[el]++;  
//         if(modeMap[el] > maxCount)
//         {
//             maxEl = el;
//             maxCount = modeMap[el];
//         }
//     }
//     return maxEl;
//     return el;
// }
// var res = mode(array);
// console.log(res);
 const givenArray = [1, 2, 3, 4, 1, 1, 2, 3, 4,4,4,4,4,4,11,1,1,1,1,1,1,1,1,,11,1,1,1,1,1,1,1,];

// const maxValue = givenArray
//   .sort(
//     (previous, current) =>
//       givenArray.filter(item => item === previous).length -
//       givenArray.filter(item => item === current).length
//   )
//   .pop();

// console.log(`Maximum occurrence value : ${maxValue}`);
let itemsMap = {};
let maxValue = 0;
let maxCount = 0;
// 3
for (let item of givenArray) {
  // 4  
  if (itemsMap[item] == null) {
    itemsMap[item] = 1;
  } else {
    itemsMap[item]++;
  }

  //5
  if (itemsMap[item] > maxCount) {
    maxValue = item;
    maxCount = itemsMap[item];
  }
}
// 6
console.log(`Value : ${maxValue}, Count : ${maxCount}`);
console.log("value",maxValue ,"and max count is" ,maxCount);
function calculate(a, b) {
    const add = a + b;
    const multiply = a * b;
    return [add, multiply];
}
const [add, multiply] = calculate(3, 4);
console.log("sum", add);
console.log("multiply", multiply);
const vechiles = ["mutang", "f-15", "masai"];
const brand = ["ferrari", "Tata", "mahindra"];
const [car, batch, school] = vechiles;
console.log(vechiles);
const numberOne = [1, 2, 3];
const numberTwo = [4, 5, 6];
const numberCombined = [...numberOne, ...numberTwo];
console.log(numberCombined);
const combined = [...vechiles, ...brand];
console.log(combined);

//Bind()
// var pokemon = {
//     firstName: "pika",
//     lastName: "Chu",
//     getPokeName: function () {
//         var fullName = this.firstname + " " + this.lastName;
//         return fullName;
//     }
// }
// var pokemonName = function () {
//     console.log(this.getPokeName() + "I chosse You!");
// };
// var logPokemon = pokemonName.bind(pokemon);
// logPokemon();
// var pokemon = {
//     firstname: 'Pika',
//     lastname: 'Chu ',
//     getPokeName: function() {
//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     }
// };

// var pokemonName = function() {
//     console.log(this.getPokeName() + 'I choose you!');
// };

// var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

// logPokemon();
// var pokemon = {
//     firstname: 'Pika',
//     lastname: 'Chu ',
//     getPokeName: function() {
//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     }
// };
// var pokemonName = function() {
//     console.log(this.getPokeName() + 'I choose you!');
// };
// var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now
// logPokemon(); // 'Pika Chu I choose you!';
// //Apply()
// const number = [5, 6, 2, 3, 7,11];
// const max = Math.max.apply(null, number);
// console.log("max",max);
// const min = Math.min.apply(null, number);
// console.log("min", min);
// const min1 = Math.min.apply(null,number);
// console.log(min1);
// //call

// function Products(name, price) {
//     this.name = name;
//     this.price = price;
// }
// function Food(name, price) {
//     Products.call(this, name, price)
//         this.category = "food";
//     }
// console.log(new Food("cheese", 5));
// function App() {
//   let text = "pawan";
//   return (
//     <div>
//       <p>{text}</p>
//     </div>
    
//   )
// }


//how to take out 2nd element of array

const data = ["Pawan", "Yadav", "Full Stack Developer"];
const [y,z,a] = data;
console.log(y, z, a);


const dataName = { name: "Pawan" };
console.log(delete data);// we cant delete data directly
console.log(delete data.name)// it gives true it delete the object name