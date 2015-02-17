var leftTotal = document.getElementById('js-message-left-symbols');
var messageArea = document.getElementById('js-message');
var total = document.getElementById('js-message-total');
var maxSymbol = 140;

function symbolCounter(event) {
    var messageLength = messageArea.value.length;
    var leftTotalLength = maxSymbol - messageLength;
    var symbolCode = event.charCode;
    total.innerHTML = messageLength;
    leftTotal.innerHTML = leftTotalLength;

    if(leftTotalLength <= 0 && symbolCode !== 0){
        event.preventDefault();
    }
}

messageArea.addEventListener("keypress", symbolCounter);

