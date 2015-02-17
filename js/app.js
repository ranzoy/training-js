var maxSymbol = 140;
var leftTotal = document.getElementById('js-message-left-symbols');
var messageArea = document.getElementById('js-message');
var total = document.getElementById('js-message-total');

leftTotal.innerHTML = maxSymbol;

function symbolCounter(event) {
    var messageLength = messageArea.value.length + 1;
    var leftTotalLength = maxSymbol - messageLength - 1;
    var symbolCode = event.charCode;
    var symbolKey = event.keyCode;

    console.log(event);

    if(symbolCode !== 0 || symbolKey == 8 || symbolKey == 46 ){
        total.innerHTML = messageLength;
        leftTotal.innerHTML = leftTotalLength;
    }

    if(leftTotalLength <= 0 && symbolCode !== 0){
        event.preventDefault();
    }
}

messageArea.addEventListener("keypress", symbolCounter);

