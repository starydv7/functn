//Hoisting
function fruits() {
    name = "Yadav";
    //we cant do with let hositing doesnot allow us to do this with let
    console.log(name);
    console.log(price);
    var name = "Pawan";
    let price=92299229
}
fruits();