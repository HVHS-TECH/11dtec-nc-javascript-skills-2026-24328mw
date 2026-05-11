/****************************
Name of task: conditionals.js
****************************/

console.log("Running t12_conditionals.js")
const OUTPUT = document.getElementById("JavaScriptOutput");
// Variables
let username;
let age;
let money;
let year = 2026;
let birthYear;
let futureAge;

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
const AGE_FIELD = document.getElementById("ageField");
age = Number(AGE_FIELD.value);
const MONEY_FIELD = document.getElementById("moneyField");
money = Number(MONEY_FIELD.value);
birthYear = year - age;
futureAge = age + 10;
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
if(money >= 4){
    OUTPUT.innerHTML += "<p>A chocolate bar costs ¥4 <br>You CAN afford a chocolate bar.</p>"
}
else{
    OUTPUT.innerHTML += "<p>A chocolate bar costs ¥4 <br>Sorry you CAN'T afford a chocolate bar.</p>"
}
}
