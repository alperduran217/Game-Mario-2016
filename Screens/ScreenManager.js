var showLogs = true;
if (showLogs) {
    console.log("Inside ScreenManager");
}
var gameWidth = 800;
var gameHeight = 450;
var backgroundColor = "#000000";
var game = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO, 'KulturGameDev', { preload: preload, create: create, update: update });
var keys;

var PlayerCharacter;

function preload() {
    if (showLogs) {
        console.log("ScreenManager - preload");
    }

    game.load.image('background', 'Pictures/bg.png');

    game.load.atlas('mario_walking', 'Sprites/MarioSprite_.png', 'Sprites/MarioSprite_.json', Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY);
}

function create() {
    if (showLogs)
        console.log("ScreenManager - create");
    var Background = game.add.sprite(game.world.centerX, game.world.centerY, 'background');
    Background.anchor.setTo(0.5, 0.5);

    keys = game.input.keyboard.createCursorKeys();

    PlayerCharacter = new GameObjects.Character();
    PlayerCharacter.init("Mario");
    console.log("name 5 " + PlayerCharacter.GetName());

}

function update() {
    if (keys.left.isDown) {
        PlayerCharacter.MoveLeft();
    }
    else if (keys.right.isDown) {
        PlayerCharacter.MoveRight();
    }
    else if (keys.up.isDown) {
        PlayerCharacter.Jump();
    }
    else {
        PlayerCharacter.Stand();
    }

}


