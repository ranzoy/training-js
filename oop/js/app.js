/**
 * TextCounter
 */
var TextCounter = {
    self: this,
    maxChar: 10,
    textArea: null,
    textAreaTotal: null,
    textAreaLeft: null,
    init: function() {
        this.textArea = document.getElementById('js-message');
        this.textAreaTotal = document.getElementById('js-message-total');
        this.textAreaLeft = document.getElementById('js-message-left-symbols');
        this.resetForm = document.getElementById('js-reset-btn');
        this.textLength = this.textArea.value.length;

        this.events();
    },

    events: function() {
        this.textArea.addEventListener("keydown", this.keydownEvent);
        this.textArea.addEventListener("keyup", this.keyupEvent);
        this.resetForm.addEventListener("click", this.resetCounter);
    },
    keydownEvent: function(event){
        console.log(self.maxChar);
        var symbolCode = event.keyCode;
        //console.log(this.maxChar);
        //this.textLength = this.textArea.value.length;
        this.textAreaLeft = this.maxChar - this.textLength;

        if(this.textAreaLeft <=0 && symbolCode !==8 && symbolCode !==35 && symbolCode !==36 && symbolCode !==36 && symbolCode !==37 && symbolCode !==38 && symbolCode !==39 && symbolCode !==40 && symbolCode !==16 && symbolCode !==17 && symbolCode !==46){
            event.preventDefault();
        }
    },
    keyupEvent: function(){

    },
    resetCounter: function(){

    }
};

TextCounter.init();
/*var textLength;
var leftTotalCount;
leftTotal.innerHTML = maxChar;

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
*/
