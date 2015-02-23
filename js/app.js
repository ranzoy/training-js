var maxChar = 10;
var textChar = document.getElementById('js-message');
var total = document.getElementById('js-message-total');
var leftTotal = document.getElementById('js-message-left-symbols');

var textLength;
var leftTotalCount;

leftTotal.innerHTML = maxChar;
//total.innerHTML = textLength;


var keydownEvent = function(event){

    textLength = textChar.value.length;
    leftTotalCount = maxChar - textLength;

    if(leftTotalCount <= 0){
        event.preventDefault();
    }
}

var keyupEvent = function(event) {


    total.innerHTML = textLength;
    leftTotal.innerHTML = leftTotalCount;

}


textChar.addEventListener("keydown", keydownEvent);
//textChar.addEventListener("keyup", keyupEvent);
