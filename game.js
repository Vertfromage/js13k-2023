// initialize 2D canvas (c)
// initialize game state (s)
// initialize keys states (u,r,d,l for directions, k for all the keyboard)
c = a.getContext`2d`, k = [u = r = d = l = s = 0]
// (initialize your global variables here)
c.w = innerWidth
c.h = innerHeight
// update u,l,d,r globals when an arrow key/wasd/zqsd is pressed or released
// update k[keyCode] if any other key is pressed/released
onkeydown = onkeyup = e => k[e.which] = self['lld*rlurdu'[e.which % 32 % 17]] = e.type[5]

var gameOver=false
var mobile = window.screen.width < 500 // For vertical view
const textContainer = document.getElementById("textContainer")
const txtInput = document.getElementById("playerInput")
const svg =["m -10.389267,104.73924 5.8771626,7.44441 L 64.446638,84.756881 196.87876,98.470267 v 17.631493 l -21.1578,4.30993 -10.97071,18.80692 -1.95905,-13.71338 12.53796,-10.18709 -31.73669,5.87717 -7.83622,9.40346 7.83622,3.5263 -11.75434,19.19874 -3.13448,-0.39181 -5.48536,5.48535 2.74268,7.0526 -5.87716,2.35087 -1.17544,-9.40347 -5.48535,-1.95905 -3.91811,3.5263 5.48535,2.74268 -3.5263,2.35086 3.91811,8.22803 -10.97071,14.49701 -9.403461,-2.35086 -3.526301,6.66078 5.877166,5.09355 -6.268976,9.01165 -6.268977,-7.0526 -2.350865,4.70173 3.918109,5.87717 -5.485353,-4.30992 -0.391813,-10.97071 -10.187085,-8.61984 -14.497008,9.40346 -3.13449,11.36252 -14.888818,-25.0759 -27.426771,-7.44441 4.70173,9.40346 7.052601,-3.13449 4.70173,6.26898 -8.619841,7.83622 -17.23968657,-3.5263 -9.01165263,-13.32158 -1.9590544,-0.39181 2.7426761,9.79528 -15.2806295,-1.56724 -0.783621,4.30992 -18.023308,-7.0526 -11.754332,9.01165 -18.80693,-14.49701 4.701734,-11.75433 23.50866,-2.74267 0.783624,5.87716 13.321575,4.30992 0.391811,-4.70173 19.3807227,3.61729 3.3918505,-9.11555 -13.7609202,0.40472 -1.959054,-7.83622 -4.701733,9.40346 -3.91811,-10.18708 -8.619843,-6.26898 -1.371338,1.17543 9.207559,8.22803 -0.587716,0.58772 -2.546772,-1.56724 0.783622,2.54677 -3.330394,3.7222 -3.722205,-1.95905 4.701733,-0.97953 0.783622,-1.56724 -9.795276,-8.42394 -2.938583,2.15496 -4.505827,-0.58772 -5.289449,5.68126 -0.195905,3.5263 -8.032126,3.3304 -5.877166,-3.91811 2.154961,-9.20756 9.795276,0.78362 v -4.89764 l -4.897638,-4.30992 9.59937,-2.54677 4.309921,-6.66079 5.093544,-0.58772 -0.783622,-5.68126 3.330394,-2.15496 0.783622,3.3304 3.134488,-1.17544 -3.134488,-5.68126 -5.093544,3.13449 -2.742677,-1.95905 -0.391811,-6.8567 15.868347,-14.10519 -3.722205,-0.39182 18.415119,-7.2485 21.1577954,8.61984 -0.19590551,1.95906 -3.72220479,2.35086 z","m -21.947693,108.06964 h -5.877166 l -0.587716,2.74267 -5.485355,5.28945 0.587716,2.74268 2.546771,1.76315 -3.526298,2.93858 -0.195906,4.70174 -4.897638,1.17543 -1.567244,1.76315 -3.330395,-1.17544 0.783625,1.95906 3.526298,-0.39181 2.154959,1.17543 5.681261,-1.76315 1.567246,1.17543 1.959054,-2.35086 0.979527,-5.28945 3.330393,1.95906 0.97953,-2.35087 -1.763152,-2.35087 3.722206,-0.97952 3.330392,0.78362 3.13449,-1.56725 2.938581,-0.39181 -0.783621,-2.35086 -1.959055,-0.78363 -0.783621,2.93859 -9.403467,0.39181 -3.330392,-1.56725 v -4.89763 z","m -14.111473,146.07531 -4.309923,6.46488 1.371341,3.5263 3.330393,-0.19591 3.5263,-2.35086 8.2280309,2.35086 2.7426761,-1.76315 -6.464882,-5.48535 -5.289447,1.76315 z","m 14.490731,145.09578 -6.2689768,4.70173 3.9181118,6.46488 -1.175433,4.89764 7.248504,1.56725 -0.391811,-4.70174 -4.309922,-8.03212 3.722205,-3.91811 z","m -61.912418,120.9994 -5.093544,3.72221 1.175433,4.70173 3.722206,3.7222 -2.938585,0.78363 v 6.26897 l 8.423939,-2.54677 1.959055,-3.5263 -3.330395,-0.1959 -3.918109,-6.26898 1.567243,-3.13449 -3.408391,0.58982 z","m -70.541346,130.24098 3.532415,-0.27705 1.10821,1.52379 -1.10821,1.10821 -0.346315,3.11683 -4.779151,1.38527 -0.277053,-1.52379 1.385263,-1.8701 -1.523788,-0.27706 0.138525,-1.93936 2.701261,0.0693 z","m 145.21307,134.25824 -2.35492,12.1903 -2.77053,8.58862 0.13853,5.81809 -11.0821,4.70989 -3.60168,3.1861 1.52379,3.60168 1.93937,-3.7402 12.19029,-3.74021 2.21642,-7.06483 -2.21642,-4.29431 3.74021,0.83116 3.7402,-2.90905 -5.12546,-3.46315 2.632,-1.52379 -1.66232,-3.32463 2.77053,-0.83116 z","m 98.534197,188.3909 -2.546771,0.78362 0.391811,1.95905 2.15496,0.19591 0.979527,-1.95905 z","m 113.91278,180.65263 -2.05701,2.79166 1.17544,2.39984 1.8611,-4.60378 z","m 55.434985,203.47562 -0.783622,3.03654 1.371338,2.74268 2.350866,-2.05701 z","m -42.713677,149.2098 33.891653,21.15779 5.2894494,-14.69291 8.0321255,12.92976 6.4648821,-10.38299 -0.587716,15.08472 27.32882,-5.3874 21.745513,-8.03212 25.957481,2.25291 -2.546772,-14.00724 2.546772,13.90929 22.333229,-2.64473 -18.708977,13.81134 -12.635906,16.16221"]
var state = 'city'
const dots = []
var txScale = mobile ? 1.4 : 1
const playerData = {
  members : [],
  money: 1000,
  hunt:0,
  supplies : {
    Camels: {val:0, cost:100},
    CamelFeed: {val:0, cost:10},
    Food: {val:0, cost:20},
    Clothing: {val:0, cost:50},
    WaterSkins: {val:0, cost:5},
    TradeGoods: {val:0, cost:50}, 
    Arrows: {val:0, cost:5},
    Tents: {val:0, cost:50}
  },
  settings : {
    pace: "steady",
    rations: "good"
  }
}
const mouse = {x:0, y:0}

const lastPathSVG = svg[svg.length - 1];
var temp = {x: 0, y:0}
lastPathSVG.split(" ").map((cor)=>{
    if(cor!=='m'){
        var parts = cor.split(",")
        temp = {x: temp.x+parseFloat(parts[0]), y: temp.y+parseFloat(parts[1])}
        dots.push({x: temp.x, y: temp.y})
    }
})
var curStep = 0
const steps = [
  { name: 'Vanice', country:'Italy', desc: "Venice thrived as a trading hub and cultural center.", start: dots[0], end: dots[1], percentage: .50},
  { name: 'Acre', country:'Israel', desc: "Bustling port city that was a focal point of trade and cultural exchange.", start: dots[1], end: dots[2], percentage: 0 },
  { name: 'Trebizond', country:'Iran', desc: "Vibrant Black Sea city that played a pivotal role in regional trade and commerce.", start: dots[2], end: dots[3], percentage: 0 },
  { name: 'Baghdag', country:'Iraq', desc: "Historic city at the heart of Islamic civilization, known for its culture, scholarship, and economic significance.", start: dots[3], end: dots[4], percentage: 0},
  { name: 'Terbil', country:'Iran', desc: "Strategic crossroads city known for its multicultural atmosphere and commercial importance.", start: dots[4], end: dots[5], percentage:0 },
  { name: 'Ormuz', country:'Iran', desc: "Bustling island city strategically positioned along important maritime trade routes", start: dots[5], end: dots[6], percentage: 0},
  { name: 'Balkh', country:'Afghanistan', desc: "Ancient city that was a vital center of trade and culture along the Silk Road", start: dots[6], end: dots[7], percentage: 0 },
  { name: 'Kashgar', country:'China', desc: "Thriving oasis city that served as a key junction on the Silk Road trading network.", start: dots[7], end: dots[8], percentage: 0 },
  { name: 'Lanzhou', country:'China', desc: "Strategic and culturally diverse city located along the Yellow River, contributing to the Silk Road's intricate tapestry.", start: dots[8], end: dots[9], percentage:0},
  { name: 'Karakorem', country:'Mongolia', desc: "The capital of the Mongol Empire, a diverse and cosmopolitan city where he met Kublai Khan.", start: dots[9], end: dots[10], percentage: 0 },
  { name: 'Beijing', country:'China', desc: "Heart of the Yuan Dynasty, a vibrant capital city where he would later serve in Kublai Khan's court.", start: dots[10], end: dots[11], percentage: 0 },
  { name: "Chengdu", country:'China', desc: "Bustling city in southwestern China known for its irrigation systems, cultural vibrancy, and regional significance.", start: dots[11], end: dots[12], percentage:0 },
  { name: "Pagan", country:'China', desc: "Vast landscape of temples and pagodas, showcasing the rich cultural heritage of Myanmar.", start: dots[12], end: dots[13], percentage:0},
  // This is the route to AsiaToDo the wiki map has the route back tooToDo
];
// death ideas: Falling from a mountain pass, drowning in a river crossing, allergic reaction to silk, wrongfully accused and executed, rightfully accused and put to death, mistaken identity, etc.
const death = ['fell from a mountain pass', 'drowned in river crossing', 'allergic reaction to silk','died of typhoid', 'died of exhaustion', 'lost in opium den', 'married a traveler', 'died of snake bite', 'wrongfully accused and executed', 'rightfully accused and put to death']

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
    //c.fillStyle = this.isClicked ? "GoldenRod" : "DarkGoldenRod";
    c.fillStyle = "GoldenRod"
    c.shadowColor = "rgba(0, 0, 0, 0.3)"
    c.shadowBlur = 6
    c.shadowOffsetX = 3
    c.shadowOffsetY = 3

    drawRoundedRect(c, this.x, this.y, this.width, this.height)

    c.fillStyle = "DarkSlateGrey"
    c.font = 3*txScale+"vw Consolas"
    c.textAlign = "center"
    c.textBaseline = "middle"
    c.fillText(this.label, this.x + this.width / 2, this.y + this.height / 2)

    c.shadowColor = "transparent"
    c.shadowBlur = 0
    c.shadowOffsetX = 0
    c.shadowOffsetY = 0
}
}

const buttons = []

function setButtons(){
  var bW = mobile ? 250 : 200
  var bH = mobile ? 70 : 60
  var mapH = (mobile ? c.h*.28+5 : c.h/3+5)+90
  var bCen = c.w*.5-bW*.5
  buttons.push(
    // first screen button
    new Button(c.w*.4, c.h*.5, bW, bH, "Start!", 0, ()=>{
        //s=2, inputView(true), changeText("Input your caravan member's names!")
        //s=4, changeText("Control your journey by making wise decisions!")
        s=6, changeText(steps[curStep].desc), state="city", p0`240
c-aY|X-XY|a-c-|V-V-|c-aY|X-VX|YXVT|V-  |a-c-|e--c|fece|a-V-|a-c-|e--c|feca|c-c-|e-f-|h-e |fhfc|e-e-|e-e-|e--c|fece|a-a-|
J---|J---|J---|J---|J---|J---|J---|J---|O---|O---|O---|O---|O---|O---|O---|O---|O---|O---|O---|O---|O---|O---|O---|O---|
`
      }),
      new Button(c.w*.4, c.h*.7, bW, bH, "Back!", 1, ()=>{
        // // temporary remove! Testing movement along map
        // if(steps[0].percentage<1){
        //   steps[0].percentage+=.05
        // }
        s=4
      }),
      new Button(c.w*.4, c.h*.7, bW, bH, "Back!", 5, ()=>{
        playerData.supplies.Food.val+= playerData.hunt<200 ? playerData.hunt : 200
        s=4
      }),
      new Button(c.w*.4, c.h*.6, bW, bH, "Add Member!", 2, ()=>{
        if(txtInput.value.length>0){
        playerData.members.push(txtInput.value)
        txtInput.value = ""
        changeText("Caravan Members: "+playerData.members.toString())
        if(playerData.members.length==5){
          s=3, inputView(false), changeText("Buy Supplies for the journey ahead!")
        }
      }
      }),
      new Button(c.w*.5-bW*1.5-2, mapH, bW, bH, "Status!", 4, ()=>{
        
      }),
      new Button(bCen, mapH, bW, bH, "Hunt!", 4, ()=>{
        if(state!=='city'){
          for(an of animalArr){
            an.v = Math.floor((Math.random() * 2))
            an.alive = true
            an.x = c.w*.2+Math.random()*c.w*.7
            an.y = c.h*.1+Math.random()*c.h*.6
            an.s= 1+Math.random() * 3
          }
          playerData.hunt=0
          changeText("You can only carry 200lbs! Use as few arrows as possible!")
          s=5
        }else{
          alert("Too many people around!")
        }
      }),
      new Button(c.w*.5+2+bW*.5, mapH, bW, bH, "Big Map!", 4, ()=>{
        s=1
      }),
      new Button(c.w*.5-bW*1.5-2, mapH+bH+5, bW, bH, "Interact!", 4, ()=>{
        // talk or trade
      }),      
      new Button(bCen, mapH+bH+5, bW, bH, "Continue", 4, ()=>{
        buttons[8].label=(buttons[8].label ==="Rest")? "Continue":"Rest"
        state=(buttons[8].label ==="Rest")? "Rest":"Moving"
      }),
      new Button(c.w*.5+2+bW*.5, mapH+bH+5, bW, bH, "Shop!", 4, ()=>{
        if(state==='city'){s=3}else{
          alert("Can only visit shop in city!")
        }
      }),
      new Button(c.w*.5+2+bW*.5, mapH+bH+5, bW, bH, "Shop!", 4, ()=>{
        if(state==='city'){s=3}else{
          alert("Can only visit shop in city!")
        }
      }),
      new Button(bCen, c.h/2, bW, bH, "Continue!", 6, ()=>{
        s=4, changeText("Control your journey by making wise decisions!")
      })

      )
  var H=c.h*.22
  for(item in playerData.supplies){
    buttons.push(
      new Button(c.w * 0.7, H, 60, 30, "+", 3, (() => {
        const currentItem = item;
        return () => {
          if(playerData.money - playerData.supplies[currentItem].cost >=0){
            playerData.money -= playerData.supplies[currentItem].cost
            playerData.supplies[currentItem].val+=playerData.supplies[currentItem].cost
          }
        };
      })()),
      new Button(c.w * 0.78, H, 60, 30, "-", 3, (() => {
        const currentItem = item;
        return () => {
          if(playerData.supplies[currentItem].val >0){
            playerData.money += playerData.supplies[currentItem].cost
            playerData.supplies[currentItem].val-=playerData.supplies[currentItem].cost
          }
        };
      })())
    )
    H+=c.h*.06
  }
  buttons.push(new Button(c.w*.7, H, bW, bH, "Done!", 3, ()=>{
    s=4
  }))
}
setButtons()

const inputView = (show) =>{
  txtInput.style.display = show ? "block" : "none";
}


// start game loop
let reqAnimationId
function smoothAnimation(e) {
	a.width = innerWidth, a.height = innerHeight
  if(mobile){tx("!!Better in wide view!!", c.w / 2, c.h * .75, 6, 'DarkSlateGrey')}
    switch (s) {
        case 0: title()
          break
        case 1: map()
          break
        case 2: setup()
          break
        case 3: shop()
          break
        case 4: statusPage()
          break
        case 5: hunt()
          break
        case 6: city()
          break
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
    switch (s) {
        case 0: 
          break;
        case 5:
          if(arrow.set&&playerData.supplies.Arrows.val>0){
            arrow.x= rope.x,arrow.y=arc.y-3
            arrow.set = false
            playerData.supplies.Arrows.val--
          }
          break;
    }
    handleButtonClick(x,y,s)
}

function title() {
  tx("Journey to the East", c.w / 2, c.h * .34, 6, '#E35A31')
  tx("Silk Road Adventure", c.w / 2, c.h * .44, 4, '#E35A31')
  changeText("Embark on a journey along the Silk Road, making strategic decisions and overcoming challenges to successfully reach your destination in the East!")
}

function setup(){
  tx("Members of Caravan?", c.w / 2, c.h * .34, 5.3, '#E35A31')
}

function statusPage(){
  let txtW=100
  c.fillStyle = "GoldenRod"
  c.fillRect(0, (mobile? c.h*.28 : c.h/3)-10, c.w, txtW)
  c.fillStyle = "DarkSlateGrey"
  drawRoundedRect(c,5, (mobile? c.h*.28 : c.h/3)-5, c.w-10, txtW-10)
  tx("This is where the events show up!", c.w / 2, (mobile? c.h*.31 : c.h*.45), 3, 'GoldenRod')
  c.fillStyle = "lightblue"
  let scale2 = mobile ? {s:3,w: c.w*.1, h: -c.h*.03} : {s:1,w: c.w*.45, h: -c.h*.1}
  mobile ? c.fillRect(0, 0, c.w, c.h*.28) : drawRoundedRect(c,c.w/3, 5, c.w/3, c.h/3+10) 
  drawMap(scale2.s, scale2.w, scale2.h)
  statusText()
}

function statusText(){
  let curFood= playerData.supplies["Food"].val,
  distCity = "ToDo",
  totalTraveled = "ToDo",
  health="ToDo",
  date="ToDo",
  weather="ToDo",
  mob = mobile?c.h/3:0

  tx("Date: "+date, c.w*.15, c.h*.1+mob, 3, 'DarkSlateGrey')
  tx("Weather: "+weather, c.w *.15, c.h*.15+mob, 3, 'DarkSlateGrey')
  tx("Health: "+health, c.w *.15, c.h*.2+mob, 3, 'DarkSlateGrey')
  tx("Food: "+curFood, c.w*.8, c.h*.1+mob, 3, 'DarkSlateGrey')
  tx("Next City: "+distCity, c.w *.8, c.h*.15+mob, 3, 'DarkSlateGrey')
  tx("Traveled: "+totalTraveled, c.w *.8, c.h*.2+mob, 3, 'DarkSlateGrey')
}

function city(){
  tx(steps[curStep].name, c.w / 2, c.h * .34, 6, '#E35A31')
  tx(steps[curStep].country, c.w / 2, c.h * .44, 4, '#E35A31')
  // TODO: Image representing city - could be decentralized add on
}

function moving(){
  // TODO: everything that happens when not stopped at a city
}

function hunt(){
  let arrows = playerData.supplies.Arrows.val
  tx("Hunting", c.w / 2, c.h * .34, 5.3, '#E35A31')
  tx("Arrows: "+arrows, c.w / 2, c.h *.45, 3, '#E35A31')
  tx("Killed: "+playerData.hunt+" lbs", c.w / 2, c.h *.55, 3, '#E35A31')
  if(arrows>0){
    bow()
  }
  animals()

}

var animalArr = [{t:"🐪", v:0, w:990},{t:"🐏", v:0, w:99},{t:"🦌", v:0, w:150,s:3}, {t:"🐇", v:0, w:11}]

function animals(){
  for(an of animalArr){
    if(an.v&& an.alive){
      tx(an.t, an.x, an.y, 5.3, '#E35A31')
      an.y+=an.s
      if(an.y<10||an.y>c.h*.9){
        an.s*=-1
      }
      if(touch(an.x,an.y,arrow.x+arrow.w,arrow.y, 25)){
        playerData.hunt+=an.w
        an.alive=false
      }
    }
  }
}

function bow(){
  //bow 
  c.beginPath();
  c.arc(arc.x,arc.y,arc.r,arc.start,arc.end);
  c.strokeStyle = "#000"
  c.lineWidth = 3
  c.stroke();
  c.closePath();
  // rope
  c.beginPath();
  c.moveTo(arc.x,arc.y-arc.r);
  if(arrow.set){
    c.lineTo(rope.x,arc.y);
  }
 
  c.lineTo(arc.x,arc.y+arc.r);
  c.lineWidth = 1
  c.stroke();
  c.closePath();

  if(arrow.set){
  //arrow shaft
  c.fillRect(rope.x,arc.y-3,10,6);
  c.fillRect(rope.x,arc.y-1,arrow.w,2);
  //arrow head
  c.beginPath();
  c.moveTo(rope.x+arrow.w,arc.y-4);
  c.lineTo(rope.x+arrow.w+12,arc.y);
  c.lineTo(rope.x+arrow.w,arc.y+4);
  c.fill();
  }else{
  //arrow shaft
  c.fillRect(arrow.x,arrow.y-3,10,6);
  c.fillRect(arrow.x,arrow.y-1,arrow.w,2);
  //arrow head
  c.beginPath();
  c.moveTo(arrow.x+arrow.w,arrow.y-4);
  c.lineTo(arrow.x+arrow.w+12,arrow.y);
  c.lineTo(arrow.x+arrow.w,arrow.y+4);
  c.fill();

  arrow.x+=12
  if(arrow.x>c.w){
    arrow.set=true
  }
  }

  if(arc.y>c.h-c.h*.3 || arc.y<50){
    arc.dy*=-1;
  }
  arc.y+=arc.dy;

  
}
const arrow ={
  x:c.w/2,
  y:c.h/2,
  w: 100,
  set:true
}

const touch= (x1,y1,x2,y2, d) =>{
		return Math.sqrt((x1 - x2)**2 + (y1 - y2)**2) < d
}

const arc = {
  x:30,
  y:100,
  dy:3,
    r:50,
    start:Math.PI+Math.PI/2,
    end:Math.PI-Math.PI/2
}

const rope = {
    h:arc.r*2,
    x:arc.x-25,
    status:true
}

function defend(){
  //TODO : second mini game defend against bandits
}

// might need to modify if price goes up and down along the wayToDo 
function shop(){
  tx("Shop", c.w / 2, c.h * .1, 5.3, '#E35A31')
  let H=c.h*.19
  sum = 0
  tx("Item", c.w*.2, H, 4,'DarkSlateGrey')
  tx("Num", c.w*.35, H, 4,'DarkSlateGrey')
  tx("Cost", c.w*.5, H, 4, 'DarkSlateGrey')
  H+=c.h*.06
for(item in playerData.supplies){
  tx(item, c.w*.2, H, 3, '#E35A31')
  tx(playerData.supplies[item].val/playerData.supplies[item].cost, c.w*.35, H, 3, 'DarkSlateGrey')
  tx(playerData.supplies[item].val, c.w*.5, H, 3, 'DarkSlateGrey')
  H+=c.h*.06
  sum+=playerData.supplies[item].val
}
tx("Total "+sum+"$", c.w*.5, H, 3, 'DarkSlateGrey')
H+=c.h*.05
tx("You have "+playerData.money+"$", c.w*.5, H, 3, 'DarkSlateGrey')
}

function map(){
  let scale1 = mobile ? {s:3,w: c.w*.1, h: 0} : {s:2,w: c.w*.2, h: -c.h*.08}
  c.fillStyle = "lightblue"
  c.fillRect(0, 0, c.w, c.h)
  drawMap(scale1.s, scale1.w, scale1.h)
  tx("Map", c.w / 2, c.h * .1, 5.3, '#E35A31')
  changeText("This is the map")
}

function drawMap(size, tX, tY){
  // draw map
  svg.forEach((svgPath, i) => {
    const path = new Path2D(svgPath)

    // making it fit correctly
    c.save()
    c.scale(size,size) // make it bigger
    c.translate(tX, tY) // Adjust the x-coordinates to center

    if (i === svg.length - 1) {
      c.strokeStyle = "DarkSlateGrey" // line for route
      c.stroke(path)

      c.strokeStyle = "DarkGoldenRod" // line for progress
      steps.forEach(step=>{
        drawPercentOfLine(step.start.x, step.start.y, step.end.x, step.end.y, step.percentage)
      })

      dots.forEach(({ x, y }) => {
        c.beginPath();
        c.arc(x, y, 3, 0, Math.PI * 2)
        c.fillStyle = "#E35A31"
        c.fill()
        c.closePath()
    })
  }else{
      if(i ===1 || i===2|| i===3){
        c.fillStyle = "lightblue"
      }else{
        c.fillStyle = "BlanchedAlmond"
      }
      c.fill(path)
  }
    c.restore() // Restore the canvas transformation
  })
}



start()

/** UTILS */
function resize(){
  mobile = window.screen.width < 500
  c.w = innerWidth
  c.h = innerHeight
  buttons.length=0
  txScale = mobile ? 1.5 : 1
  setButtons()
}
window.addEventListener('resize', resize);


function start() {
    reqAnimationId = requestAnimationFrame(smoothAnimation)
}

function tx(t, w, h, f, s) {
    c.textAlign = 'center'
    c.fillStyle = s
    c.font = txScale*f + 'vw Consolas'
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
    textContainer.style.display = show ? "block" : "none";
}

function changeText(newText) {
  textContainer.textContent = newText;
}

function drawRoundedRect(c, x, y, width, height) {
  const cornerRadius = 10
  c.beginPath()
  c.moveTo(x + cornerRadius, y)
  c.arcTo(x + width, y, x + width, y + height, cornerRadius)
  c.arcTo(x + width, y + height, x, y + height, cornerRadius)
  c.arcTo(x, y + height, x, y, cornerRadius)
  c.arcTo(x, y, x + width, y, cornerRadius)
  c.closePath()
  c.fill()
}

function drawPercentOfLine( x1, y1, x2, y2, percentage) {
  const interpolated_x = x1 + percentage * (x2 - x1)
  const interpolated_y = y1 + percentage * (y2 - y1)

  c.lineWidth=3.5
  c.beginPath()
  c.moveTo(x1, y1)
  c.lineTo(interpolated_x, interpolated_y)
  c.stroke()
  c.lineWidth=1
}

// might need for archery game
onmousemove = e => { 
    mouse.x = e.clientX,
    mouse.y = e.clientY;
  }

