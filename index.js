var app = new PIXI.Application();

document.body.appendChild(app.view);

// load SVG into a PIXI tree
var RobotSVG = require('pixi-svg-loader!./robot.svg');
var robot = new RobotSVG();

robot.x = app.view.width/2 - robot.width/2;
robot.y = app.view.height/2 - robot.height/2;

// make it relative later
robot.lleg.original_y = robot.lleg.y;
robot.rleg.original_y = robot.rleg.y;

// Render loop
function gameLoop(t) {
  requestAnimationFrame(gameLoop);
  robot.head.lpupil.rotation = t*0.005;
  robot.head.rpupil.rotation = t*0.005;
  robot.head.rotation = 0.1*Math.sin(t*0.001);

  robot.lleg.y = robot.lleg.original_y + 10*Math.sin(t*0.01);
  robot.rleg.y = robot.rleg.original_y + 10*Math.cos(t*0.01);

  app.renderer.render(robot);
}
gameLoop();
