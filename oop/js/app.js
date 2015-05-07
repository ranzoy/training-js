/**
 * TextCounter
 */
var TextCounter = {
    maxChar: 10,
    textArea: null,
    textAreaTotal: null,
    textAreaLeft: null,
    igonreKey: false,
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
        var keyIgnoreArray = [8,16,17,35,36,37,38,39,40,46];

        this.textLength = this.textArea.value.length;
        this.textAreaLeftCount = this.maxChar - this.textLength;
        this.igonreKey = false;
        if(this.textLength >= this.maxChar) {
            for(var i=0; i < keyIgnoreArray.length; i++){
                if(symbolCode == keyIgnoreArray[i]) {
                    this.igonreKey = true;
                    break;
                }
            }
            if(!this.igonreKey){
                event.preventDefault();
            }
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
