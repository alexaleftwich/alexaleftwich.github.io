var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
  function createSawBlade(a, b) {
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        
        sawBladeHitZone.x = a;
        sawBladeHitZone.y = b;
        game.addGameItem(sawBladeHitZone);   
        
        var obstacleImage = draw.bitmap('img/sawblade.png');
        sawBladeHitZone.addChild(obstacleImage)

  }
  function createRocket(m, n) {
        var hitZoneSize = 15;
        var damageFromObstacle = 20;
        var rocketHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        
        rocketHitZone.x = m;
        rocketHitZone.y = n;
        game.addGameItem(rocketHitZone);   
        
        var obstacleImage = draw.bitmap('img/rocket.jpg');
        obstacleImage.x =-25;
        obstacleImage.y =-25;
        rocketHitZone.addChild(obstacleImage)
 }
        createSawBlade(750, 200);
        createSawBlade(520, 150);
        createRocket(100, 300)

        var enemy = game.createGameItem('enemy',25);
        var redSquare = draw.rect(50,50,'red');
        redSquare.x = -25;
        redSquare.y = -25;
        enemy.addChild(redSquare);

        enemy.x = 400;
        enemy.y = groundY-50;
        game.addGameItem(enemy);

        // BEGIN EDITING YOUR CODE HERE

        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
