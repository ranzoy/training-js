/**
 * TextCounter
 */
var TextCounter = {
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
        this.textArea.addEventListener("keydown", this.keydownEvent.bind(this));
        this.textArea.addEventListener("keyup", this.keyupEvent.bind(this));
        this.resetForm.addEventListener("click", this.resetCounter.bind(this));
    },
    keydownEvent: function(event){
        var symbolCode = event.keyCode;
        this.textLength = this.textArea.value.length;
        this.textAreaLeftCount = this.maxChar - this.textLength;
        if(this.textAreaLeftCount <=0 && symbolCode !==8 && symbolCode !==35 && symbolCode !==36 && symbolCode !==36 && symbolCode !==37 && symbolCode !==38 && symbolCode !==39 && symbolCode !==40 && symbolCode !==16 && symbolCode !==17 && symbolCode !==46){
            event.preventDefault();
        }
    },
    keyupEvent: function(){
        this.textLength = this.textArea.value.length;
        this.textAreaLeftCount = this.maxChar - this.textLength;
        if(this.textAreaLeftCount >= 0){
            this.textAreaTotal.innerHTML = this.textLength;
            this.textAreaLeft.innerHTML = this.textAreaLeftCount;
        }
    },
    resetCounter: function(){
        this.textAreaTotal.innerHTML = 0;
        this.textAreaLeft.innerHTML = this.maxChar;
    }
};

TextCounter.init();
