gra.Preload = function(game) {};
gra.Preload.prototype = {
    preload: function() {

        this.load.image('background', 'img/background.JPG');

        this.load.image('start','img/button.png');

        this.load.image('podstawa', 'img/podstawa.png');
        this.load.image('ramie', 'img/ramie.png');
        this.load.image('wtf', 'img/wtf.png');

        this.load.audio('karmin', 'img/karmin.mp3');
    },
    create: function() {
        this.state.start('Menu');
    }

};