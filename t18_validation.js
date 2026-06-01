/****************************
* Name of task: validation.js
****************************/
console.log("Running t18_validation.js")
const OUTPUT = document.getElementById("JavaScriptOutput");
// Variables
let username;
let age;
let money;
let year = 2026;
let birthYear;
let futureAge;
let change;
let chocolateOpinionArray = ["You loath chocolate", "Chocolate is meh", "Chocolate is pretty good", "Chocolate is the best thing EVER!!!!"];
let chocolateOpinion;
let verses;
let item;
let listArray = [];
//functions
function calculateChange(_money,_price){
    let change = _money - _price;
    return change;
}
function welcome(){
    OUTPUT.innerHTML += "<h1>welcome to the shop</h1>";
}
function displayProduct(_name,_price){
    OUTPUT.innerHTML +="<p>"+ _name +": ¥"+ _price +"</p>";
}
function testFormValidity(_form){
    let formValidity = _form.checkValidity();
    return formValidity;
}
function getListFormInput(){
    const LIST_FORM = document.getElementById("listForm");
    testFormValidity(LIST_FORM)
    if (LIST_FORM === false) {
        OUTPUT.innerHTML = "<p>Please add an item</p>"
    }
    else{
    const LIST_FIELD = document.getElementById("listField");
    item = LIST_FIELD.value;
    listArray.push(item)
    OUTPUT.innerHTML = "<p>You have added "+item+" to your list</p>";
    }
}
function displayList(){
    OUTPUT.innerHTML = "<h1>Your List:</h1>";
    for(let i=0; i<listArray.length; i++){
        OUTPUT.innerHTML += "<p>Item "+ (i+1) +": "+listArray[i]+"</p>"
    }
}

function getFormInput(){
    const MAIN_FORM = document.getElementById("mainForm");
    testFormValidity(MAIN_FORM)
    if (MAIN_FORM === false) {
        OUTPUT.innerHTML = "<p>Please fill all fields correctly</p>"
    }
    else{
    const NAME_FIELD = document.getElementById("nameField");
    username = NAME_FIELD.value;
    const AGE_FIELD = document.getElementById("ageField");
    age = Number(AGE_FIELD.value);
    const MONEY_FIELD = document.getElementById("moneyField");
    money = Number(MONEY_FIELD.value);
    const CHOCOLATE_OPINION_FIELD = document.getElementById("chocolateOpinionField");
    chocolateOpinion = CHOCOLATE_OPINION_FIELD.value;
    const VERSES_FIELD = document.getElementById("versesField");
    verses = Number(VERSES_FIELD.value);
    birthYear = year - age;
    futureAge = age + 10;
    /****************************
    main code
    ****************************/
    OUTPUT.innerHTML = "<p>Hi "+username+".</p>";
    OUTPUT.innerHTML += "<p>As of "+year+" you are "+age+" years old.</p>";
    OUTPUT.innerHTML += "<p>You were born in "+birthYear+".</p>";
    OUTPUT.innerHTML += "<p>In 10 years you will be "+futureAge+" years old.</p>";
    OUTPUT.innerHTML += "<p>You have ¥"+money+"</p>";
    money = money / 2;
    OUTPUT.innerHTML += "<p>You spend half of your money, now you have ¥"+money+"</p>";
    money = money + 3;
    OUTPUT.innerHTML += "<p>Then you get ¥3, now you have ¥"+money+ "</p>";
    welcome();
    displayProduct("Chocolate bar", 4);
    displayProduct("Chips", 3);
    displayProduct("Drink", 2.5);
    if(money >= 4){
        OUTPUT.innerHTML += "<p>A chocolate bar costs ¥4. You CAN afford a chocolate bar.</p>";
        change = calculateChange(money, 4);
        OUTPUT.innerHTML += "<p>You will get ¥" +change+ " change</p>";
    }
    else{
        OUTPUT.innerHTML += "<p>A chocolate bar costs ¥4. Sorry you CAN'T afford a chocolate bar.</p>";
    }
    OUTPUT.innerHTML += "<p>"+chocolateOpinionArray[chocolateOpinion]+"</p>";
    for(let i = verses; i>=1; i=i){
        if(i>=2){
            OUTPUT.innerHTML += "<p>"+i+" bottles of chocolate milk on the wall</p>";
            OUTPUT.innerHTML += "<p>"+i+" bottles of chocolate milk</p>";
            OUTPUT.innerHTML += "<p>And if one of those bottles should happen to fall</p>";
        }
        else{
            OUTPUT.innerHTML += "<p>"+i+" bottle of chocolate milk on the wall</p>";
            OUTPUT.innerHTML += "<p>"+i+" bottle of chocolate milk</p>";
            OUTPUT.innerHTML += "<p>And if that bottle should happen to fall</p>";
        }
        i = i - 1
        if(i>=2){
            OUTPUT.innerHTML += "<p>There'd be "+i+" bottles of chocolate milk on the wall</p>";
        }
        else{
            OUTPUT.innerHTML += "<p>There'd be "+i+" bottle of chocolate milk on the wall</p>";
        }
    }
    }
}
