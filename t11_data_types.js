/****************************
Name of task: input_from_HTML.js
****************************/

console.log("Running t10_input_from_HTML.js")
const OUTPUT = document.getElementById("JavaScriptOutput");
// Variables
let username
let age
let money = 1000000000;
let year = 2026;
let birthYear
let futureAge
birthYear = year - age
futureAge = age + 10
//functions
function welcome(){
    OUTPUT.innerHTML += "<h1>welcome to the shop</h1>";
}
function displayProduct(_name,_price){
    OUTPUT.innerHTML +="<p>"+ _name +": ¥"+ _price +"</p>";
}
function getFormInput(){
const NAME_FIELD = document.getElementById("nameField");
username = NAME_FIELD.value;
const AGE_FIELD = document.getElementById(ageField);
age = number(AGE_FIELD.value);
const MONEY_FIELD = document.getElementById(moneyField);
money = number(MONEY_FIELD.value);

/****************************
 main code
 ****************************/
OUTPUT.innerHTML = "<p>Hi "+ username +".</p>";
OUTPUT.innerHTML += "<p>As of "+ year +" you are "+ age +" years old.</p>";
OUTPUT.innerHTML += "<p>You were born in "+ birthYear +".</p>";
OUTPUT.innerHTML += "<p>In 10 years you will be "+ futureAge +" years old.</p>";
OUTPUT.innerHTML += "<p>You have ¥"+ money+ "</p>";
money = money / 2;
OUTPUT.innerHTML += "<p>You spend half of your money, now you have ¥"+ money + "</p>";
money = money + 3;
OUTPUT.innerHTML += "<p>Then you get ¥3, now you have ¥"+ money + "</p>";
welcome();
displayProduct("Chocolate bar",4);
displayProduct("Chips", 3);
displayProduct("Drink", 2.5);
}
