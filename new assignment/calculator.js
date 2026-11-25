
let input1 = document.getElementById("display1")
console.log(input1);

let input2 = document.getElementById("display2")
console.log(input2);




// ADDITION BUTTON 

let add = document.getElementById("plus")
add.addEventListener("click", function () {

    console.log("click");

    let inp1 = +input1.value
    let inp2 = +input2.value
    let result = inp1 + inp2
    console.log(result);

})


// SUBTRACTION BUTTON 

let subtract = document.getElementById("sub")

subtract.addEventListener("click", function () {

    let inp1 = +input1.value
    let inp2 = +input2.value

    let result = inp1 - inp2
    console.log(result);
})

// MULTIPLICATION BUTTON 

let mul = document.getElementById("multiplication")
mul.addEventListener("click", function () {

    let inp1 = +input1.value
    let inp2 = +input2.value

    let result = inp1 * inp2
    console.log(result);

})


// DEVESION BUTTON 

let dev = document.getElementById("devision")

dev.addEventListener("click", function () {
    let inp1 = +input1.value
    let inp2 = +input2.value

    let result = inp1 / inp2

    console.log(result);

})

// CLEAR BUTTON 

let clearbtn = document.getElementById("clear")
clearbtn.addEventListener("click",function(){

    input1.value = " "
      input2.value = " "
})






// let equal = document.getElementById("equalbtn")

// equal.addEventListener("click", function())



