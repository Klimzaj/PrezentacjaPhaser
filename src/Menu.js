gra.Menu = function(game) {};
gra.Menu.prototype = {
    create: function() {

        this.physics.startSystem(Phaser.Physics.ARCADE);

        background = this.add.sprite(0, 0, 'background');

        startButton = this.add.button(200,200,'start',this.zmien,this,0,0,0);
                    

        podstawa = this.add.sprite(50, 790, 'podstawa');
        podstawa.anchor.setTo(0, 0);
        podstawa.scale.setTo(0.6, 0.6);

        ramie = this.add.sprite(120, 900, 'ramie');
        ramie.anchor.setTo(0, 0.5);
        ramie.scale.setTo(0.7, 0.5);

        music = this.game.add.audio('karmin');

        w0 = this.add.sprite(320, 500, 'wtf');
        this.physics.enable(w0, Phaser.Physics.ARCADE);
        w0.anchor.setTo(0.5, 0.5);

        keyboard = this.input.keyboard.createCursorKeys();
        this.game.input.mouse.capture = true;
    },
    update: function() {
        if ((keyboard.up.isDown)&&(a === 1))
        {
            ramieAngle = 1;
            ramie.angle -= ramieAngle;
        }
        else if((keyboard.down.isDown)&&(a === 1))
        {
            ramieAngle = -1;
            ramie.angle -= ramieAngle;
        }
        if ((keyboard.up.isDown)&&(a === 2))
        {
            w0.body.velocity.y = -200;
        }
        else if ((keyboard.down.isDown)&&(a === 2))
        {
            w0.body.velocity.y = 200;
        }
        else if ((keyboard.right.isDown)&&(a === 2))
        {
            w0.body.velocity.x = 200;
        }
        else if ((keyboard.left.isDown)&&(a === 2))
        {
            w0.body.velocity.x = -200;
        }
        else
        {
            w0.body.velocity.x = 0;
            w0.body.velocity.y = 0;
        }
    },
    zmien:function(){
        if(a === 1){
            a = 2
        }
        else
        {
            a = 1
        }
    
    } 
}