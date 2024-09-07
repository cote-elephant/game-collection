const app = new PIXI.Application({
  view: document.getElementById('canvas')
});
const ufoList = [];

const rocket = PIXI.Sprite.from("../assets/rocket.png");
rocket.x = 300; // x-position of rocket start at left side
rocket.y = 250; // y.position of rocket start at top side
rocket.scale.x = 0.03; // x-scale of rocket
rocket.scale.y = 0.03; // y-scale of rocket
app.stage.addChild(rocket);

gameInterval(function () {
  const ufo = PIXI.Sprite.from("../assets/ufo" + random(1, 2) + ".png");
  ufo.x = random(0, 500);
  ufo.y = 50;
  ufo.scale.x = 0.02;
  ufo.scale.y = 0.02;
  app.stage.addChild(ufo);
  ufoList.push(ufo);
  flyDown(ufo, 1); //flyDown() comes from gameloop.js

  waitForCollision(ufo, rocket).then(function () {
    app.stage.removeChild(rocket);
    stopGame();
  });
}, 1000); //1000 = intervall: 1000 = 1000ms = 1s 

// move the rocket to left
function leftKeyPressed() {
  rocket.x = rocket.x - 5;
}
//move the rocket to right
function rightKeyPressed() {
  rocket.x = rocket.x + 5;
}
// let the rocket shoot
function spaceKeyPressed() {
  const someWeapon = PIXI.Sprite.from("../assets/someWeapon.png");
  someWeapon.x = rocket.x + 13;
  someWeapon.y = 500;
  someWeapon.scale.x = 0.02;
  someWeapon.scale.y = 0.02;
  flyUp(someWeapon);
  app.stage.addChild(someWeapon);

// the collision between rocket and ufos
  waitForCollision(someWeapon, ufoList).then(function ([someWeapon, ufo]) {
    app.stage.removeChild(ufo);
    app.stage.removeChild(someWeapon);
  });
} 