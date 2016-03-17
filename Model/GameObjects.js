var GameObjects = window.GameObjects || {};

GameObjects.Character = (function () {
    return {
        sprite: "",
        bFacingRight: "",
        Name: "",
        init: function (CharName) {
            bFacingRight = true;
            Name = CharName;
            sprite = game.add.sprite(40, 345, 'mario_walking');
            //sprite.animations.add('walk');
            sprite.animations.add('walk', [0, 4, 5, 6, 7, 8, 9, 10]);
            sprite.animations.add('stand', [3]);
            sprite.animations.add('jump', [11, 1, 2]);


            sprite.animations.play('stand', 8, true);
            sprite.anchor.setTo(.5, .5);
        },
        GetName: function () {
            return Name;
        },
        MoveRight: function () {
            sprite.x++;

            if (!bFacingRight) {
                sprite.scale.x *= -1;
                bFacingRight = true;
            }
            sprite.animations.play('walk', 8, true);

            console.log("right");
        },
        MoveLeft: function () {
            sprite.x--;

            if (bFacingRight) {
                sprite.scale.x *= -1;
                bFacingRight = false;
            }
            sprite.animations.play('walk', 8, true);

            console.log("left");
        },
        Jump: function () {

            sprite.animations.play('jump', 8, true);
            console.log("jump");
        },
        Stand: function () {

            sprite.animations.play('stand', 8, true);
            console.log("stand");
        }

    };
});


