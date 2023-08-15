// initialize 2D canvas (c)
// initialize game state (s)
// initialize keys states (u,r,d,l for directions, k for all the keyboard)
c = a.getContext`2d`, k = [u = r = d = l = s = 0]
// (initialize your global variables here)
c.w = innerWidth;
c.h = innerHeight;
// update u,l,d,r globals when an arrow key/wasd/zqsd is pressed or released
// update k[keyCode] if any other key is pressed/released
onkeydown = onkeyup = e => k[e.which] = self['lld*rlurdu'[e.which % 32 % 17]] = e.type[5]

var gameOver=mobile=false

// steps on the journey
const steps = [
  { start: { x: 50, y: 50 }, end: { x: 300, y: 300 }, percentage: 0 },
  { start: { x: 100, y: 200 }, end: { x: 250, y: 100 }, percentage: 0 },
  // Add more steps here
];


// Button class
class Button {
  constructor(x, y, width, height, label, scene, onClick) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.label = label
    this.isClicked = false
    this.s = scene
    this.onClick = onClick
  }

  draw() {
    c.fillStyle = this.isClicked ? "GoldenRod" : "DarkGoldenRod";

    c.shadowColor = "rgba(0, 0, 0, 0.3)";
    c.shadowBlur = 6;
    c.shadowOffsetX = 3;
    c.shadowOffsetY = 3;

    const cornerRadius = 10;
    
    drawRoundedRect(c, this.x, this.y, this.width, this.height, cornerRadius);
    c.fill();

    c.fillStyle = "DarkSlateGrey";
    c.font = "18px Arial";
    c.textAlign = "center";
    c.textBaseline = "middle";
    c.fillText(this.label, this.x + this.width / 2, this.y + this.height / 2);

    c.shadowColor = "transparent";
    c.shadowBlur = 0;
    c.shadowOffsetX = 0;
    c.shadowOffsetY = 0;
}

}

const buttons = [
    new Button(c.w*.45, c.h*.6, 100, 50, "Start!", 0, ()=>{
      console.log("Clicked button 1")
      s=1
    }),
    new Button(c.w*.45, c.h*.6, 100, 50, "Button 2", 1, ()=>{
      // temporary remove!
      if(steps[0].percentage<1){
        steps[0].percentage+=.05
        console.log( steps[0].percentage)
      }
    }),
  ]

// start game loop
let reqAnimationId
function smoothAnimation(e) {
	a.width = innerWidth, a.height = innerHeight
    switch (s) {
        case 0: title()
            break
        case 1: map()
    }
    drawButtons()
    reqAnimationId = requestAnimationFrame(smoothAnimation)
}

// handle click/touch events
// globals x and y contain the pointer's coordinates
// in each screen, you can make a click update the game state
// ex: "game over if we click on the bottom half of the screen" => `if(y>h/2)s=3;`
onclick = e => {
    x = e.pageX; y = e.pageY
    handleButtonClick(x,y,s)
    switch (s) {
        case 0: if(x>a.width/2){mobile=true;}
            break;
    }
}

function title() {
  c.w = innerWidth
  c.h = innerHeight
    
  tx("Journey to the East", c.w / 2, c.h * .34, 5.3, '#E35A31')
  tx("Silk Road Adventure", c.w / 2, c.h * .44, 3.3, '#E35A31')
  changeText("Embark on a journey along the Silk Road, making strategic decisions and overcoming challenges to successfully reach your destination in the East!")
}

function map(){
  tx("Map", c.w / 2, c.h * .1, 5.3, '#E35A31')
  steps.forEach(step=>{
    drawPercentOfLine(step.start.x, step.start.y, step.end.x, step.end.y, step.percentage)
  })
  changeText("This is the map")
}



start()

/** UTILS */
function resize(){
//TODO Resize function
}


function start() {
    reqAnimationId = requestAnimationFrame(smoothAnimation)
}

function tx(t, w, h, f, s) {
    c.textAlign = 'center'
    c.fillStyle = s
    c.font = f + 'vw Consolas'
    c.fillText(t, w, h)
}

function handleButtonClick(x, y, s) {
    buttons.forEach(button => {
      if (
        x >= button.x &&
        x <= button.x + button.width &&
        y >= button.y &&
        y <= button.y + button.height &&
        button.s==s
      ) {
        button.isClicked = !button.isClicked;
        button.onClick()
        drawButtons()
      }
    });
  }

function drawButtons() {
    buttons.forEach(button => button.s==s && button.draw())
  }

function toggleTextContainer(show) {
    const textContainer = document.getElementById("textContainer");
    textContainer.style.display = show ? "block" : "none";
}

function changeText(newText) {
  const textContainer = document.getElementById("textContainer");
  textContainer.textContent = newText;
}

function drawRoundedRect(c, x, y, width, height, cornerRadius) {
  c.beginPath();
  c.moveTo(x + cornerRadius, y);
  c.arcTo(x + width, y, x + width, y + height, cornerRadius);
  c.arcTo(x + width, y + height, x, y + height, cornerRadius);
  c.arcTo(x, y + height, x, y, cornerRadius);
  c.arcTo(x, y, x + width, y, cornerRadius);
  c.closePath();
}

function drawPercentOfLine( x1, y1, x2, y2, percentage) {
  const interpolated_x = x1 + percentage * (x2 - x1)
  const interpolated_y = y1 + percentage * (y2 - y1)

  c.setLineDash([20,5])
  c.lineWidth=4
  c.beginPath()
  c.moveTo(x1, y1)
  c.lineTo(interpolated_x, interpolated_y)
  c.stroke()
  c.setLineDash([])
  c.lineWidth=1
}

// might need for archery game
// onmousemove = e => { 
//     mouse.x = e.clientX,
//     mouse.y = e.clientY;
//   }
