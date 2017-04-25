// Enemies our player must avoid
var Enemy = function(x, y, s) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.s = s;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.s*dt
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player = function (x, y, s) {
  this.x = x;
  this.y = y;
  this.s = s;

  this.sprite = 'images/char-boy.png';
};



// Now write your own player class
// This class requires an update(), render() and
Player.prototype = {
  update: function () {

  },
  render: function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  },
  handleInput: function (key) {
    switch (key) {
      case 'left':
        this.x -= this.s;
        break;
      case 'right':
        this.x += this.s;
        break;
      case 'up':
        this.y -= this.s;
        break;
      case 'down':
        this.y += this.s;
        break;
    }
  }
}
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];

var player = new Player (200, 400, 100);

var generateEnemies = function () {

  for (var i=0; i<4;i++) {
    var enemy = new Enemy (-100, Math.random ()*300,Math.random() * 400);
    allEnemies.push (enemy)
  }

  allEnemies.forEach(function(enemy, index) {
      if(enemy.x > 500){
          allEnemies.splice(index, 1);
      }
  });

  setTimeout (function () {
    generateEnemies ()

    console.log(allEnemies);
  }, 4000)

}

generateEnemies()







// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
