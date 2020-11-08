var car, wall, speed, weight;


function setup() {
  createCanvas(1200,400);
  speed = random(55,90);
  weight = random(400, 1500);
  car = createSprite(50, 200, 50,50);
  car.velocityX = speed;
  car.shapeColor = "white";
  wall = createSprite(1100,200,60,200);
  wall.shapeColor = "grey";
}

function draw() {
  background("black");  
  if(wall.x-car.x<car.width/2+ wall.width/2){
    car.velocityX = 0;
    var diformation = 0.5 * weight * speed * speed/22500;
    if(diformation<100){
    car.shapeColor = "green";  
    }
    else if(diformation>180){
    car.shapeColor = "red";}
   else if(diformation>100 && diformation<180){
    car.shapeColor = "yellow";
  }}
  drawSprites();

}