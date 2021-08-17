var aranv 
function setup() {

  
  createCanvas(400,400);
 aranv= createSprite(200,150,90,90)
}


function draw() {


background('white');

if (keyIsDown(DOWN_ARROW)) {

background('red');

}

if (keyIsDown(UP_ARROW)) {

  background('blue');
  
  }


if (keyIsDown(LEFT_ARROW)) {

  background('green');
  
  }
  
if (keyIsDown(RIGHT_ARROW)) {

  background('yellow');
  
  }

drawSprites()


}



