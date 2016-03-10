﻿var showLogs = true;
var keys;
var character;
if (showLogs) {
    console.log("ScreenManager");
}
var gameWidth = 800;
var gameHeight = 450;
var backgroundColor = "#000000";
var game = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO, 'KulturGameDev', {
    preload: preload, create: create, update: update });
function preload() {
    if (showLogs) {
        console.log("ScreenManager ­ preload");
    }
    game.load.image('background', 'Pictures/bg.png');
}
function create() {
    if (showLogs)
        console.log("ScreenManager ­create");
    var Background = game.add.sprite(game.world.centerX, game.world.centerY, 'background');
    Background.anchor.setTo(0.5, 0.5);
}
function update() {
    
    if (keys.up.isDown) {
        character.y--;
        console.log("up");
    }
  

  else if (keys.down.isDown) {
        character.y++;
        console.log("down");
    }
    if (keys.left.isDown) {
        console.log("left");
        
    }
        character.x++;
        console.log("right");
    }

}