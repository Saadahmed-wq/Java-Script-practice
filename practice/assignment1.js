// alert("hey there")

// alert("Please Enter  a valid password")

// alert("Welcome to JS land... \n Happy coding")





let number = 0

let displaycount = document.getElementById("count")

let ibtn = document.getElementById("increase")

let dbtn = document.getElementById("decrease")

let rbtn = document.getElementById("resetbtn")




ibtn.addEventListener("click", function () {

    number++

    displaycount.innerText = number

})





dbtn.addEventListener("click", function () {

    number--

    displaycount.innerText = number

})

rbtn.addEventListener("click", function () {

    number = 0
    displaycount.innerText = number

})

