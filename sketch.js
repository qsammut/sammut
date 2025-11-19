let x;

let scene1;
let scene2;
let scene3;
let started = false;


let game;

let game2;

let sceneList = [];
let currentScene;

function preload(){
  lake= loadImage("lake.png");
  school= loadImage("school.png");
  jim= loadImage("jim.png");
  blu= loadImage("blue.png");
  scripps= loadImage("scripps.png");
  prep= loadImage("prep.png");
  town= loadImage("town.png");
  dances= loadImage("dance.png");
  coast= loadImage("coast.png");
  HW= loadImage("HW.png");
  bar= loadImage("bar.png");
  deb= loadImage("deb.png");
  street= loadImage("street.png");
  denison= loadImage("denison.png");
  room= loadImage("room.png");

  
/////GUY//////
  pw= loadImage("PW.gif");
  paddle= loadImage("Paddle.gif");
  camp= loadImage("717.gif");
  emo= loadImage("EMO.gif");
  tinyQuinn= loadImage("tinyQuinn.gif");
  home= loadImage("home.gif");
  fam= loadImage("FAM.gif");
  ak= loadImage("AK.gif");
  kkarp= loadImage("kkarp.gif");
  halloween= loadImage("Halloween.gif");
  zo= loadImage("zo.gif");
  robot= loadImage("robot.gif");
  squad= loadImage("squad.gif");
  debs= loadImage("DEBS.gif");
  frank= loadImage("frank.gif");

//////MUSIC/////
  roxy= loadSound("Mother Of Pearl.mp3");
  mercy= loadSound("My Lady of Mercy.mp3");
  anotherGirl= loadSound("Another Girl, Another Planet.mp3");
  ripple= loadSound("Ripple.mp3");
  mapp= loadSound("Get Out the Map.mp3");
  soul= loadSound("Lady Grinning Soul.mp3");
  feilds= loadSound("Absolutely Cuckoo.mp3");
  rain= loadSound("Only Happy When It Rains.mp3");
  dance= loadSound("Dance Dance.mp3");
  rollin= loadSound("Rollin.mp3");
  hot= loadSound("HOT TO GO.mp3");
  disco= loadSound("I Destroyed Disco.mp3");
  fly= loadSound("Human Fly.mp3");
  banana= loadSound("Bananaphone.mp3");
  roads= loadSound("Country Roads.mp3");
}

function setup() {
  createCanvas(400, 400);
  
  scene1 = new Scene(lake,new Guy(paddle, 300,300, roxy));
  scene2 = new Scene(school, new Guy(robot,300,300, mercy));
  scene3 = new Scene(deb,new Guy(debs,300,300, anotherGirl));
  scene4 = new Scene(blu, new Guy(fam,300,300, ripple));
  scene5 = new Scene(denison, new Guy(home,300,300, mapp));
  scene6 = new Scene(prep, new Guy(frank,300,300, soul));
  scene7 = new Scene(scripps, new Guy(squad,300,300, feilds));
  scene8 = new Scene(room, new Guy(tinyQuinn,400,400, rain));
  scene9 = new Scene(town, new Guy(emo,300,300, dance));
  scene10 = new Scene(street, new Guy(pw, 450,450, rollin));
  scene11 = new Scene(dances, new Guy(zo,300,300, hot));
  scene12 = new Scene(coast, new Guy(ak,300,300, disco));
  scene13 = new Scene(HW, new Guy(halloween,300,300, fly));
  scene14 = new Scene(jim, new Guy(kkarp,300,300, banana));
  scene15 = new Scene(bar, new Guy(camp,300,300, roads));

  sceneList.push(scene1);
  sceneList.push(scene2);
  sceneList.push(scene3);
  sceneList.push(scene4);
  sceneList.push(scene5);
  sceneList.push(scene6);
  sceneList.push(scene7);
  sceneList.push(scene8);
  sceneList.push(scene9);
  sceneList.push(scene10);
  sceneList.push(scene11);
  sceneList.push(scene12);
  sceneList.push(scene13);
  sceneList.push(scene14);
  sceneList.push(scene15);
  
  game = new Game(sceneList);

  currentScene = scene1;
}


function draw() {
  background("pink");
  
  if (started == true) {
   game.update();
  }else{
    textSize(15)
    textAlign(CENTER)
    text("click", 200,200);
  }}

function mousePressed(){
  started = true;
}
  
/////////CLASSES///////////
class Guy{
  constructor(img, w, h, music){
    this.img = img; 
    this.w = w;
    this.h=h;
    this.music = music; 
    this.musicStarted = false;
    this.x = 0;
    this.xSpeed = 3;
  }

  update() {
    if (keyIsPressed) {
      if (keyCode == RIGHT_ARROW) {
        this.x += this.xSpeed;
      }
      if (keyCode == LEFT_ARROW) {
        this.x -= this.xSpeed;
      }
    }
    imageMode(CENTER)
    image(this.img,this.x,300,this.w,this.h);
    if(this.musicStarted == false){
      this.music.play();
      this.musicStarted = true;
    }
  }
  
   atEdge() {
    if (this.x > width) {
      this.x = 0;
      this.music.stop();
      this.musicStarted = false;
      return true;
    } else {
      return false;
    }
  }
}
//switch to img when get img lol 
class Scene {
  constructor(img, Guy) {
    this.img = img;
    this.Guy = Guy;
  }

  update() {
    imageMode(CORNER)
    background(this.img);
    this.Guy.update();
  }

  checkEdge() {
    return this.Guy.atEdge();
  }
}

class Game{
  constructor(sceneL){
   this.sceneList = sceneL 
  }
  
  update(){
       for (let i = 0; i < this.sceneList.length; i++) {
      if (this.sceneList[i] == currentScene) {
        this.sceneList[i].update();
        if (this.sceneList[i].checkEdge()) {
          if (i != this.sceneList.length - 1) {
            currentScene = this.sceneList[i + 1];
          } else {
            currentScene = this.sceneList[0];
          }
        }
      }
    }
  }
}
  