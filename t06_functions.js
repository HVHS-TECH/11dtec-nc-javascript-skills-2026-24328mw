/****************************
Name of task: functions.js
****************************/
console.log("Running t06_functions.js")
const OUTPUT = document.getElementById("JavaScriptOutput");
// Variables
let username = "Miriam";
let age = 15;
let money = 1000000000;
let year = 2026;
let birthYear
let futureAge
birthYear = year - age
futureAge = age + 10
//functions
function welcome(){
    OUTPUT.innerHTML += "<p>welcome to the shop</P>"
}
/****************************
 main code
 ****************************/
welcome()
OUTPUT.innerHTML = "<p>Hi "+ username +".</p>";
OUTPUT.innerHTML += "<p>As of "+ year +" you are "+ age +" years old.</p>";
OUTPUT.innerHTML += "<p>You were born in "+ birthYear +".</p>";
OUTPUT.innerHTML += "<p>In 10 years you will be "+ futureAge +" years old.</p>";
OUTPUT.innerHTML += "<p>You have ¥"+ money+ "</p>";
money = money / 2;
OUTPUT.innerHTML += "<p>You spend half of your money, now you have ¥"+ money + "</p>";
money = money + 3;
OUTPUT.innerHTML += "<p>Then you get ¥3, now you have ¥"+ money + "</p>";
 /****************************
 functions
 ****************************/