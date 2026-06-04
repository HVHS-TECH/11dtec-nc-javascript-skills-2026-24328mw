/****************************
* Name of task: objects.js
****************************/
console.log("Running t21_objects.js")
const OUTPUT = document.getElementById("JavaScriptOutput");
// Variables
const YEAR = 2026;
const CHOCOLATE_OPINION_ARRAY = ["You loath chocolate", "Chocolate is meh", "Chocolate is pretty good", "Chocolate is the best thing EVER!!!!"];
const USER = {};
let change;
let item;
let listArray = [];
let formValidity;
let textFieldValidity
let length
//functions
function calculateChange(_money,_price){
    let _change = _money - _price;
    return _change;
}
function welcome(){
    OUTPUT.innerHTML += "<h1>welcome to the shop</h1>";
}
function displayProduct(_name,_price){
    OUTPUT.innerHTML +="<p>"+ _name +": ¥"+ _price +"</p>";
}
function testTextFieldValidity(_text){
    let _textFieldValidity = isNaN(_text.value);
    return _textFieldValidity;
}
function testFormValidity(_form){
    let _formValidity = _form.checkValidity();
    return _formValidity;
}
function testLength(_input){
    let _fieldLength = _input.length;
    return _fieldLength;
}
function getListFormInput(){
    const LIST_FORM = document.getElementById("listForm");
    formValidity = testFormValidity(LIST_FORM)
    if (formValidity === false) {
        OUTPUT.innerHTML = "<p>Please add a valid item</p>"
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
    formValidity = testFormValidity(MAIN_FORM)
    if (formValidity === false){
        OUTPUT.innerHTML = "<p>Please fill all fields correctly</p>"
    }
    else{
    const NAME_FIELD = document.getElementById("nameField");
    USER.name = NAME_FIELD.value;
    textFieldValidity = testTextFieldValidity(USER.name);
    if (textFieldValidity === false){
        OUTPUT.innerHTML = "<p>Please enter a valid name</p>"
    }
    else{
    fieldLength = testLength(USER.name)
    if (fieldLength < 3){
        OUTPUT.innerHTML = "<p>Please enter a valid name</p>"
    }
    else{
    const AGE_FIELD = document.getElementById("ageField");
    USER.age = Number(AGE_FIELD.value);
    const MONEY_FIELD = document.getElementById("moneyField");
    USER.money = Number(MONEY_FIELD.value);
    const CHOCOLATE_OPINION_FIELD = document.getElementById("chocolateOpinionField");
    USER.chocolateOpinion = CHOCOLATE_OPINION_FIELD.value;
    const VERSES_FIELD = document.getElementById("versesField");
    USER.verses = Number(VERSES_FIELD.value);
    USER.birthYear = YEAR - USER.age;
    USER.futureAge = USER.age + 10;
    /****************************
    main code
    ****************************/
    OUTPUT.innerHTML = "<p>Hi "+USER.name+".</p>";
    OUTPUT.innerHTML += "<p>As of "+YEAR+" you are "+USER.age+" years old.</p>";
    OUTPUT.innerHTML += "<p>You were born in "+USER.birthYear+".</p>";
    OUTPUT.innerHTML += "<p>In 10 years you will be "+USER.futureAge+" years old.</p>";
    OUTPUT.innerHTML += "<p>You have ¥"+USER.money+"</p>";
    USER.money = USER.money / 2;
    OUTPUT.innerHTML += "<p>You spend half of your money, now you have ¥"+USER.money+"</p>";
    USER.money = USER.money + 3;
    OUTPUT.innerHTML += "<p>Then you get ¥3, now you have ¥"+USER.money+ "</p>";
    welcome();
    displayProduct("Chocolate bar", 4);
    displayProduct("Chips", 3);
    displayProduct("Drink", 2.5);
    if(USER.money >= 4){
        OUTPUT.innerHTML += "<p>A chocolate bar costs ¥4. You CAN afford a chocolate bar.</p>";
        change = calculateChange(USER.money, 4);
        OUTPUT.innerHTML += "<p>You will get ¥" +change+ " change</p>";
    }
    else{
        OUTPUT.innerHTML += "<p>A chocolate bar costs ¥4. Sorry you CAN'T afford a chocolate bar.</p>";
    }
    OUTPUT.innerHTML += "<p>"+CHOCOLATE_OPINION_ARRAY[USER.chocolateOpinion]+"</p>";
    for(let i = USER.verses; i>=1; i=i){
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
    }
}