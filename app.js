// console.log("Saad Ahmed")
// console.log(30 + 40);




// alert( "hello")
// alert( 20 + 40)




// addition = 100 + 40
// console.log( addition);



// subtraction = 100 - 40
// console.log(subtraction);


// multiplication = 3 * 5
// console.log(multiplication);


// legal variables


// studentName = "wahab"
// studentname = "saad"
// student3 = "sohaib"
// student_number = 30
// StudentName = "Hamza"

// ill legal variables


// student-name = 
// student name 
// student@ =
// 1student =
// // if =


// // js is case sensitive

// age = 20
// console.log( age);

// Age = 30
// console.log(Age);



// reassign

var Class = " web dev"
console.log(Class);


Class = "computer class"
console.log(Class);


// Redeclare

var group = "Polo group"
console.log(group);

var group = "sports group"
console.log(group);




// declare
var student;
console.log(student);





// let







// let bike = "Ninja"
// console.log( bike);


// let bike = "BMW"
// console.log( );




// let  phone = " Samsung"
// console.log( phone);
// phone = "tecno"



// let car; ""
// console.log( car);


// // const


// const folder = "E commerce"
// folder = "untitled"
// console.log(folder);


// // declare without value 
// const website ;
// console.log();


// string

let studentName = "Uzair"
console.log(studentName);

console.log(typeof ((studentName)));


// number
let number = 27
console.log(number);
console.log(typeof ((number)));

// Boolean
let isAlive = false
console.log(isAlive);
console.log(typeof (isAlive));

// undefined

let book;
console.log(book);
console.log(typeof (book));

// null
let pen = null
console.log(pen);
console.log(typeof (pen));





// string indexing
let language = "HTML is a programming language"
console.log(language);

console.log(language[6]);

console.log(language.length);



// console.log(language[subject.length-1]);


let app = "facebook"

console.log(app);

let upercase = app.toUpperCase()
console.log(app.toUpperCase());

// console.log(app.toUpperCase());



let file = "HOME"
console.log(file);
console.log(file.toLowerCase());



let web = "Our food is so fresh and tasty"
console.log(web);

console.log(web.includes("healthy"));



let text = "hi there"
console.log(text);
console.log(text.indexOf("s"));



let para = "my hobbies are not that much"
console.log(para);
console.log(para.slice(3, 8));



let animal = "cows are good"
console.log(animal);
console.log(animal.replace("cow", "goat"));
console.log(animal.replace("are", "is"));


let laptop = "  dell"
console.log(laptop.trim());


let copy = "Urdu"
console.log(copy.charAt(3));



let mouse = "mice"
console.log(mouse.startsWith("m"));


let computer = "acer"
console.log(computer);
console.log(computer.endsWith("r"));


let message = "HTML is a programming language"
console.log(message.split("a"));


let dress = "black"
console.log(dress.repeat(3));


// Arithmetic Operators

let num1 = 3
let num2 = 6
let result = num1 + num2
console.log(result);


let num3 = 10
let num4 = 4
console.log(num3 - num4);


let num5 = 15
let num6 = 2
console.log(num5 * num6);


let num7 = 4
let num8 = 10
console.log(num7 / num8);


let num9 = 12
let num10 = 3
console.log(num9 % num10);


let num11 = 12
let num12 = 2
console.log(num11 ** num12);







// Comparison operators

// let marks = 35

// console.log(marks == false ); //true
// console.log(marks === false);  // false
// console.log(marks != 35);  // false 
// console.log(marks !== "35");  //true
// console.log(marks > 35);   //false
// console.log(marks < 30);    //false
// console.log(marks >= 30);   //true
// console.log(marks <= 35);    //true



// let marks1 = "35"
// console.log(marks1 < "30" );



// let number1 = 3

// if(number1 % 2 == 0 ){alert("it is an even number")}

// else{alert("it is not an odd number")}



// let signal = prompt("input a color")
// if(signal === "red"){
//     alert("Stop")
// }
// else if(signal ===" yellow"){
//     alert("Get ready")
// }
// else if(signal === "green"){
//     alert("Go")
// }
// else{
//     alert("invalid Signal")
// }



//    // Marks
// let marks = +prompt("Enter your marks")

// typeof("marks")
// console.log(typeof("marks"));

// if(marks > 100){
//     alert("Invaild marks")
// }
// else if(marks >= 90 ){
//     alert("A+")
// }

// else if(marks >= 80){
//     alert("A")
// }
// else if(marks >= 70){
//     alert("B")
// }
// else if(marks >= 60){
//     alert("C")
// }
// else if(marks >= 50){
//     alert("D")
// }
// else if(marks == false){
//     alert("Enter any number")
// }

// else{alert("Fail")}




// // log in code

// let username = prompt("enter your username")
// let password =  +prompt("enter your password")

// if(username === "admin"){
//     if(password === 1234 ){
//         alert("Login successful")
//     }
//     else("incorrect password")
// }
// else("invalid username")




// let pin = 1234
// let totalbalance = 5000
// let  withdraw = +prompt("Enter withdrwal amount")


// if (pin === 1234){
//     if (totalbalance >= withdraw){
//         alert("transaction succesfull")

//     }
// else("insufficent balance")
// }

// else{"Invalid pin"}










// let phones = ["iphone", "samsung" , "tecno" , "google" , "pixel", "infinix", "mobile", "itel", "vgotel", "nokia"]

// console.log(phones);

// console.log(phones[4]);
// console.log(phones[8]);
// console.log(phones[11]);
// phones[7]= "laptop"
// console.log(phones);

// console.log(phones.length);

// console.log(phones[phones.length-1]);

// phones.length = 0
// console.log(phones);





// let bikes = ["Honda",["CD", ["h2r" , "seventycc"]], "Suzuki", ["Unique"], "Bionic"]


// console.log(bikes[1][0]);

// console.log(bikes[3]);





let colors = ["black", "blue", "white"]
console.log(colors);



let numbers = [[2, 4], [6, 8], [10, 12]];
console.log(numbers[1][1]);




let subjects = [["Math", "English"], ["HTML", "JavaScript"]];
console.log(subjects[1][1]);
subjects[0] = "CSS"
console.log(subjects);





let math = [11, 22, 33, 44]
console.log(math[2] = 99);
console.log(math);



let carts = [["Rice", "oil", "sugar"], ["pulse", "powder", "honey"]]
console.log(carts[0][1]);






// let employees = [["Daniyal", "danish", "abrar", "qadeer"], [30000, 45000, 50000, 25000] ]




// console.log(employees[0][1]);
// console.log(employees[1][2]);
// console.log(employees[1][0]=35000);
// employees[3]= "wahab"
// console.log(employees);
// console.log(employees.length);

// console.log(employees);


let employees = [["wahab", 35000], ["danish", 45000], ["daniyal", 50000], ["abrar", 25000]]


console.log(employees[1][0]);
console.log(employees[2][1]);
console.log(employees[0][1] = 20000);
employees[3][0] = "huzaifa"
console.log(employees.length);

console.log(employees);



let totalamount = employees[0][1] + employees[1][1] + employees[2][1] + employees[3][1]
console.log(totalamount);






// Methods of Array


let fruits = ["apple", "mango", "banana"]

console.log(fruits.push("dates"));
console.log(fruits);
console.log(fruits.pop());
console.log(fruits);



let devices = ["phone", "laptop", "tablet"]

console.log(devices.unshift("powerbank"));
console.log(devices);


let removed = devices.shift();
console.log(devices);
console.log(removed);





















































