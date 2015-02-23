var maxChar = 10;
var textChar = document.getElementById('js-message');
var total = document.getElementById('js-message-total');
var leftTotal = document.getElementById('js-message-left-symbols');
var resetForm = document.getElementById('js-reset-btn');

var textLength;
var leftTotalCount;

leftTotal.innerHTML = maxChar;
//total.innerHTML = textLength;


var keydownEvent = function(event){
    var symbolCode = event.keyCode;

    textLength = textChar.value.length;
    leftTotalCount = maxChar - textLength;

    if(leftTotalCount <=0 && symbolCode !==8 && symbolCode !==35 && symbolCode !==36 && symbolCode !==36 && symbolCode !==37 && symbolCode !==38 && symbolCode !==39 && symbolCode !==40 && symbolCode !==16 && symbolCode !==17 && symbolCode !==46){
        event.preventDefault();
    }
}

var keyupEvent = function(event) {

    textLength = textChar.value.length;
    leftTotalCount = maxChar - textLength;

    if(leftTotalCount >= 0){
        total.innerHTML = textLength;
        leftTotal.innerHTML = leftTotalCount;
    }

}

var resetCounter = function(){
    total.innerHTML = 0;
    leftTotal.innerHTML = maxChar;
}

textChar.addEventListener("keydown", keydownEvent);
textChar.addEventListener("keyup", keyupEvent);
resetForm.addEventListener("click", resetCounter);
