var { SVGActor } = require('./actor.js');

var app = new PIXI.Application();

document.body.appendChild(app.view);

var actors = [];

// load SVG into a PIXI tree
var robotSVG = require('pixi-svg-loader!./robot.svg');

var robot1 = new SVGActor(robotSVG, {
  idle: {
    head: {
      lpupil: {
        rotation: ({t}) => t*0.005
      },
      rpupil: {
        rotation: ({t}) => t*0.005
      },
      rotation: ({t}) => 0.1*Math.sin(t*0.001)
    },
    lleg: {
      y: ({t, original}) => original + 10*Math.sin(t*0.01)
    },
    rleg: {
      y: ({t, original}) => original + 10*Math.cos(t*0.01)
    }

  }
}, {
  x: app.view.width/4,
  y: app.view.height/3
});

app.stage.addChild(robot1);
actors.push(robot1);


var robot2 = new SVGActor(robotSVG, {
  idle: {
    head: {
      lpupil: {
        x: ({t, original}) => original+10*Math.sin(t*0.005)-10
      },
      rpupil: {
        x: ({t, original}) => original-10*Math.sin(t*0.005)-10
      },
      y: ({t, original}) => original+10*Math.sin(t*0.003)
    },
    lleg: {
      rotation: ({t}) => 0.2*Math.sin(t*0.01)
    },
    rleg: {
      rotation: ({t}) => 0.2*Math.sin(t*0.01)
    }

  }
}, {
  x: 3*app.view.width/4,
  y: app.view.height/3
});

app.stage.addChild(robot2);
actors.push(robot2);


// Render loop
function gameLoop(t) {
  requestAnimationFrame(gameLoop);

  actors.forEach(a => a.update(t));

}
gameLoop();
