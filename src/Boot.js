var gra = {
    _WIDTH: 640,
    _HEIGHT: 1136
};

var backgrund;
var startButton;
var podstawa;
var ramie;
var music;
var pierwszy = 0;
var startWTF = false;
var keyboard;
var ramieAngle;

var a = 1;

var w0;


gra.Boot = function(game) {};
gra.Boot.prototype = {

    create: function() {
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.state.start('Preload');
    }
};