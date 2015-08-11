/**
 * Click Generator
 */

var clickGenerator = {
    maxClick: 100,
    countTiles: 100,
    cacheClick: [],
    randClick: 0,
    init: function(){
        this.tilesBox = document.getElementById("js-tiles");
        this.generateBtn = document.getElementById("js-generate-click");
        this.resultsBtn = document.getElementById("js-show-results");
        this.resetBtn = document.getElementById("js-reset");
        for (var i = 0; i < this.countTiles; i++) {
            var tile = document.createElement('div');
            tile.setAttribute('class', 'tile');
            this.tilesBox.appendChild(tile);
        }
        this.tiles = this.tilesBox.querySelectorAll(".tile");
        this.events();
    },
    events: function(){
        var self = this;
        var nodeList = Array.prototype.slice.call(this.tilesBox.children);

        this.generateBtn.addEventListener("click", this.generateClick.bind(this));
        this.resultsBtn.addEventListener("click", this.showResults.bind(this));
        this.resetBtn.addEventListener("click", this.resetResults.bind(this));

        for(var i=0;i<this.tiles.length; i++){
            this.cacheClick[i] = 0;
            this.tiles[i].addEventListener("click", function(){
                var index = nodeList.indexOf(this);
                self.cacheClick[index]++;
            });
        }
    },
    generateClick: function(){
        for(var i=1;i<=this.maxClick;i++){
            this.randClick = Math.floor(Math.random() * this.tiles.length);
            this.tiles[this.randClick].click();
        }
    },
    showResults: function(){
        for(var i=0;i<this.tiles.length; i++){
            this.qtyClicks = this.cacheClick[i];
            this.tiles[i].innerHTML = this.qtyClicks;
            switch (true){
                case this.qtyClicks >= 26 && this.qtyClicks <=50:
                    this.tiles[i].className = "tile light-yellow";
                    break;
                case this.qtyClicks >= 51 && this.qtyClicks <=75:
                    this.tiles[i].className = "tile yellow";
                    break;
                case this.qtyClicks >= 76 && this.qtyClicks <=100:
                    this.tiles[i].className = "tile orange";
                    break;
                case this.qtyClicks >= 101:
                    this.tiles[i].className = "tile red";
                    break;
            }
        }
    },
    resetResults: function(){
        for(var i=0;i<this.tiles.length; i++){
            this.tiles[i].innerHTML = '';
            this.cacheClick[i] = 0;
            this.tiles[i].setAttribute('class', 'tile');
        }
    }
};

clickGenerator.init();
