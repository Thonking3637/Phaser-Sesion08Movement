
var config = {
    type: Phaser.AUTO,
   
    width: 800,
    height: 600,
  
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
var game;
var sprite;
var sprite2;
var cursors;

function init(){
    console.log("Init");
    game = new Phaser.Game(config);
    
    
}

function preload(){
    this.load.image('Ralph', 'assets/uwu.png');
    this.load.image('Penelope', 'assets/owo.png' )
    cursors = this.input.keyboard.createCursorKeys();
}

function create(){
    sprite = this.add.image(400, 300, 'Ralph');
    sprite.scaleX = 1;
    sprite.scaleY = 1;
    sprite.x = 200;
    sprite.y = 350;

    sprite2 = this.add.image(400, 300, 'Penelope');
    sprite2.scaleX = 0.3;
    sprite2.scaleY = 0.3;
    sprite2.x = 320;
    sprite2.y = 500;
    
}

function update(){
    if (cursors.up.isDown)sprite.y-=10;
    if(cursors.down.isDown)sprite.y+=10;
    if(cursors.right.isDown)sprite.x+=10;
    if(cursors.left.isDown)sprite.x-=10;
}