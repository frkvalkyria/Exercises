
let userNumbers = "";
let inputList = [];
let lastOperationWasEqual = false;

addEventListener("0", buttonClick);
addEventListener("1", buttonClick);
addEventListener("2", buttonClick);
addEventListener("3", buttonClick);
addEventListener("4", buttonClick);
addEventListener("5", buttonClick);
addEventListener("6", buttonClick);
addEventListener("7", buttonClick);
addEventListener("8", buttonClick);
addEventListener("9", buttonClick);
addEventListener(".", buttonClick);
addEventListener("=", determineOutcome);
addEventListener("/", addOperator);
addEventListener("*", addOperator);
addEventListener("+", addOperator);
addEventListener("-", addOperator);
addEventListener("clear", clear);
addEventListener("backspace", removeLastInput);


function addEventListener(id, callback) {

    let newEventListener = document.getElementById(id);
    newEventListener.addEventListener('click', ()=> callback(id));    
}

function buttonClick(id){

    if (lastOperationWasEqual) {
        clearArray();
    };

    userNumbers = userNumbers.concat(id);

    console.log(userNumbers);
    console.log(id);

    lastOperationWasEqual = false;

    showUserInput();
}


function stringToNumber(string) {

    return parseFloat(string);

}

function showUserInput() {

    const inputField = document.getElementById('show-numbers');

    inputField.innerText = userNumbers;
}

function currentResult(numberOne, operator, numberTwo) {

    if (operator === "+" ) {
        return numberOne + numberTwo;
    }
    else if (operator === "-" ) {
        return numberOne - numberTwo;
    }
    else if (operator === "*" ) {
        return numberOne * numberTwo;
    }
    else if (operator === "/" ) {
        return numberOne / numberTwo;
    }

}

function showCurrentResult (result, operator) {
    clearArray();
    inputList.push(result);
    if (operator){
        inputList.push(operator);
    }
    
    const inputField = document.getElementById('show-numbers');

    inputField.innerText = result;
}

function addOperator(operator) {
    
    lastOperationWasEqual = false;

    let currentNumbers = userNumbers;
    clearUI();
    console.log(inputList);

    if (inputList.length === 1 && operator === "-"){
        inputList.push(operator);
    }

    else if(currentNumbers === "" && operator === "-"){
        userNumbers = userNumbers.concat(operator);
    }

    else if (inputList.length < 2 && currentNumbers.length === 0){
        inputList.push(operator);
    }

    else if ( inputList.length < 2 ) {
        inputList.push(currentNumbers);
        inputList.push(operator);
    }

    else if (inputList.length === 2) {
        inputList[1] = operator;

    }

    else {
        let numberOne = stringToNumber(inputList[0]);

        let numberTwo = stringToNumber(currentNumbers);

        showCurrentResult(currentResult(numberOne, inputList[1], numberTwo), operator);

    };
}

function determineOutcome(){

    if (lastOperationWasEqual){

    }else {
   
    let currentNumbers = userNumbers;
    clearUI();

    let numberOne = stringToNumber(inputList[0]);

    let numberTwo = stringToNumber(currentNumbers);

    lastOperationWasEqual = true;

    showCurrentResult(currentResult(numberOne, inputList[1], numberTwo), null);
    }
}


function clearArray() {
    inputList = [];
}

function clearUI(){

    const inputField = document.getElementById('show-numbers');
                                
    userNumbers = "";

    inputField.innerText = userNumbers;
}

function removeLastInput() {
    userNumbers = userNumbers.slice(0, userNumbers.length-1);
    showUserInput();
}

function clear() {
    lastOperationWasEqual = false;
    clearUI();
    clearArray();
}